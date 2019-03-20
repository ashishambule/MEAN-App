const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SchoolSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  schoolName: {
    type: String,
    required:true
  },
  location: {
    type: String,
    reqired:true
  },
  std: {
    first: {
      type: [String]
    },
    second: {
      type: [String]
    },
    third: {
      type: [String]
    },
    fourth: {
      type: [String]
    },
    fifth: {
      type: [String]
    },
    sixth: {
      type: [String]
    },
    seventh: {
      type: [String]
    },
    eighth: {
      type: [String]
    },
    nineth: {
      type: [String]
    },
    tenth: {
      type: [String]
    }
  }
});

module.exports = School = mongoose.model('school', SchoolSchema);