const mongoose = require('mongoose');

const Message = mongoose.model('Message', {
  name: {
    type: String,
    minlength: 1,
    trim: true
  },
  text: {
    type: String,
    minlength: 1,
    trim: true
  }
});

module.exports = { Message };
