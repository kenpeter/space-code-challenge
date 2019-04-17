const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: String,
  email: String,
  dob: String,
  latitude: String,
  longitude: String,
  location: String
});

/* global db */
module.exports = db.model('Profile', profileSchema);
