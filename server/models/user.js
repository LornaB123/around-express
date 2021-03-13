const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    validate: {
      validator: (v) => /https?:\/\/(www\.)?[\w\][/.~:?%#@!$&'()*+,;=-]+\..+/.test(v),
      message: (props) => `${props.value} is not a valid URL.`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);