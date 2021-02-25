const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  lastname: {
    type: String,
    unique:true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    trim: true,
    minlength: 3
  },
  occupation: {
    type: String,
    trim: true,
    minlength: 3
  },
  city: {
    type: String,
    trim: true,
    minlength: 3
  },
  bio: {
    type: String,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;