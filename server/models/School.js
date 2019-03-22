const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
student = {

  name: {
    type: String,
    reqired: true
  },
   age: {
    type: String,
    required: true
  },
  location:{
    type:String,
    required:true
  },
  std:{
    type:String,
    required:true
  }
}
const SchoolSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  schoolName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    reqired: true
  },

  students: {
    type: [student]
  }
});

module.exports = School = mongoose.model('school', SchoolSchema);