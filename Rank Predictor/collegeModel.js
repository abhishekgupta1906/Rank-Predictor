const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;