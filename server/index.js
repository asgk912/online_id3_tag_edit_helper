const express = require('express');
const path = require('path');
const multer = require('multer');
const morgan = require('morgan');
const axios = require('axios');
const NodeID3 = require('node-id3');
const db = require('../db/index.js');

// set up server
var app = express();
const port = 3000;
app.set('port', port);

// parsing and logging
app.use(express.json());
app.use(morgan('dev'));

// middleware to handle audio file post
const upload = multer();

// directory of static files
app.use('/', express.static(path.join(__dirname, '../client/dist')));

/* 
  Request Reponses
*/

// response to file post from step 1
app.post('/api/v1/file', upload.single('audio'), (req, res) => {
  db.createDoc(req.file.buffer, req.file.originalname, req.file.mimtype, (err, dbQRes) => {
    if(err) res.sendStatus(500)
    else res.status(201).send({id: dbQRes._id});
  });
});

// response to query through iTunes API from step 2
app.get('/api/v1/search', (req, res) => {
  let config = { params: {
    media: 'music',
    // entity: 'attribute=artistTerm,songTerm',
  }};
  config.params = Object.assign(config.params, req.query);

  axios.get('https://itunes.apple.com/search', config)
    .then((iTunesRes) => {
      res.json(iTunesRes.data.results);
    })
    .catch(() => res.sendStatus(500));
});

// response to tag update from step 3
app.post('/api/v1/selection', (req, res) => {
  let { id, newTags } = req.body;

  let editAndRespond = (id, newTags) => { // function to read doc and update
    db.readDoc(id, (err, dbQRes1) => {
      if(err) res.sendStatus(500);
      else {
        NodeID3.write(newTags, dbQRes1.fileBuffer, (err, newFileBuffer) => {
          if(err) res.sendStatus(500);
          else {
            db.updateDoc(id, { fileBuffer: newFileBuffer}, (err, dbQRes2) => {
              if(err) res.sendStatus(500);
              else res.json({original: dbQRes2.fileName, artist: newTags.artist, title: newTags.title});
            })
          }
        });
      }
    })
  }

  if(newTags.image) { //if image url is selected, then change to buffer
    axios({
      url: newTags.image,
      method: 'get',
      responseType: 'arraybuffer'
    })
      .then((imgRes) => {
        newTags.image = imgRes.data;
        editAndRespond(id, newTags);
      })
      .catch(() => res.sendStatus(500));
  } else {
    editAndRespond(id, newTags);
  }
  
})

app.post('/api/v1/fileName', (req, res) => {
  db.updateDoc(req.body.id, {fileName: req.body.fileName}, (err) => {
    if(err) res.sendStatus(500);
    else res.sendStatus(200);
  })
});

app.get('/api/v1/file', (req, res) => {
  db.readDoc(req.query.id, (err, dbQRes) => {
    if (err) res.sendStatus(500);
    else {
      res.set({
        'Content-Type': dbQRes.mimtype,
        'Content-Disposition': `attachment; filename=${dbQRes.fileName}`
      });
      res.end(dbQRes.fileBuffer);
    }
  })
  
});

// start server
app.listen(port, () => {
  console.log('Listening on', port);
});

module.exports = app;