var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  name  : String,
  url   : String,
  tags  : { type: Schema.Types.ObjectId, ref: 'Tag'}
});

module.exports = mongoose.model('Link', linkSchema);
