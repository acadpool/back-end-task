const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movie: String,
  genre: String,
  duration: String,
  date_of_release: String,
  director: String,
  trailer_link: String,
  imdb_rating: Number,
  imdb_rank: Number
});

module.exports = mongoose.model('Movie', movieSchema);
