var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  name: String,
  url: String
});

module.exports = mongoose.model('links', linkSchema);
