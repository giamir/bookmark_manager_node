var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  name  : String,
  links : [{ type: Schema.Types.ObjectId, ref: 'Link'}]
});

module.exports = mongoose.model('Tag', tagSchema);
