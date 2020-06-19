const express = require('express');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.use(morgan('dev'));

// specify the directory of static files
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// handle requests
// to handle audio file post
const upload = multer();

var audioBuffer, audioFileName, audioMimeType, newTags;

app.post('/api/v1/file', upload.single('audio'), (req, res) => {
  audioBuffer = req.file.buffer;
  audioFileName = req.file.originalname;
  audioMimeType = req.file.mimetype;
  
  res.sendStatus(201);
});

app.get('/api/v1/search', (req, res) => {
  let config = {};
  config.params = {
    media: 'music',
    // entity: 'attribute=artistTerm,songTerm',
  };
  config.params = Object.assign(config.params, req.query);

  axios.get('https://itunes.apple.com/search', config)
    .then((iTunesRes) => {
      res.json(iTunesRes.data.results);
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus(500);
    });
});

app.post('/api/v1/selection', (req, res) => {
  newTags = Object.assign({}, req.body);

  NodeID3.write(newTags, audioBuffer, (err, newAudioBuffer) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      audioBuffer = newAudioBuffer;
      res.sendStatus(200);
    }
  });
})

app.get('/api/v1/file', (req, res) => {
  res.set('Content-Type', audioMimeType);
  res.set('Content-Disposition', `attachment; filename=${audioFileName}` );
  res.end(audioBuffer);
});

// start server
app.listen(port, () => {
  console.log('Listening on', port);
});

module.exports = app;