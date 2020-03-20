const express = require('express');
const multer = require('multer');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const NodeID3 = require('node-id3');

// set up server
var app = express();
const port = 3000;
app.set('port', port);

// parsing and logging
app.use(express.urlencoded({'extended': true}));
app.use(morgan('dev'));

// specify the directory of static files
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// handle requests
// to post of audio file
const upload = multer();
var audioBuffer;
var audioFileName;
var audioMimeType;

app.post('/api/v1/file', upload.single('audio'), (req, res) => {
  audioBuffer = req.file.buffer;
  audioFileName = req.file.originalname;
  audioMimeType = req.file.mimetype;
  res.sendStatus(201);
});

app.get('/api/v1/file', (req, res) => {
  let tags = {
    title: "I CHANGED IT",
    artist: "I CHANGED IT",
    album: "I CHANGED IT",
  }

  NodeID3.write(tags, audioBuffer, (err, newBuffer) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.set('Content-Type', audioMimeType);
      res.set('Content-Disposition', `attachment; filename=${audioFileName}` );
      res.end(newBuffer);
    }
  });
})

app.get('/api/v1/search', (req, res) => {
  let config = {};
  config.params = {
    media: 'music',
    // entity: 'attribute=artistTerm,songTerm',
  };
  config.params = Object.assign(config.params, req.query);

  axios.get('https://itunes.apple.com/search', config)
    .then((iTunesRes) => {
      res.json(iTunesRes.data);
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus(500);
    });
})

// start server
app.listen(port, () => {
  console.log('Listening on', port);
});

module.exports = app;