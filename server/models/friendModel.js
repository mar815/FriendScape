const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const friendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  hobbies: [String],
  favoriteMovies: [String],
  favoriteMusic: [String],
  travelGoals: [String],
  favoriteFoods: [String],
  goals: [String],
  id: {
    type: String,
    default: uuidv4
  }
});

module.exports = mongoose.model('Friend', friendSchema);
