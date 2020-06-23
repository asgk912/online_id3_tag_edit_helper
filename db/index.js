const mongoose = require('mongoose');
const dbName = 'id3TagEdittor'       // queryResultbase name
const collectionName = 'uploadedFile' // table(collection) name

// connect to mongoDB
mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connected to MongoDB');
  }
});

// schema for collection(table)
const schema = new mongoose.Schema({
  fileBuffer: Buffer,
  fileName: String,
  mimeType: String      
});

// create ollection(table) called 'modelUF' with schema described above
const modelUF = mongoose.model(collectionName, schema);

/*
  CRUD
*/

// create
let createDoc = (fileBuffer, fileName, mimeType, callback) => {
  let newUF = new modelUF({ fileBuffer, fileName, mimeType });

  newUF.save()
    .then((qRes) => callback(null, qRes))
    .catch((err) => callback(err, null));
};

// read
let readDoc = (id, callback) => {
  modelUF.findById(id, {__v: 0})
    .then((qRes) => callback(null, qRes))
    .catch((err) => callback(err, null));
};

// update
let updateDoc = (id, newData, callback) => {
  modelUF.findByIdAndUpdate(id, newData, {returnOriginal: false, useFindAndModify: false})
    .then((qRes) => callback(null, qRes))
    .catch((err) => callback(err, null));
};

// delete
let deleteDoc = (id, callback) => {
  modelUF.findByIdAndDelete(id)
    .catch((err) => callback(err));
};

module.exports = { createDoc, readDoc, updateDoc, deleteDoc };