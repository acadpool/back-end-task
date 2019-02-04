var mongoose = require('mongoose');

//Movies Schema
var movieSchema = mongoose.Schema({
  movie:{
    type: String,
    required:true
  },
  genre:{
    type: Object,
    required:true
  },
  duration:{
    type: String,
    required:true
  },
  date_of_release:{
    type: String,
    required:true
  },
  director:{
    type: String,
    required:true
  },
  trailer_link:{
    type: String,
    required:true
  },
  imdb_rating:{
    type: Number,
    required:true
  },
  imdb_rank:{
    type: Number,
    required:true
  }
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);

// /getAll
module.exports.getAllMovies = function(callback, limit){
  Movie.find(callback).limit(limit);
}

// /getAll(pagination)
module.exports.getAllMoviesUsingPagination = function(callback, limit){
  Movie.find(callback).limit(6);
}

// /getById
module.exports.getMoviesById = function(id, callback){
  Movie.findById(id, callback);
}

// /search
module.exports.getMoviesByString = function(genre, callback) {
  var query = { genre: genre};
  Movie.find(query, callback);
}

// /add
module.exports.addMovies = function(movie, callback){
  Movie.create(movie, callback);
}

// /update
module.exports.updateMovies = function(id, movie, options, callback){
  var query = {_id: id};
  Movie.findOneAndUpdate(query,{$set: movie},{upsert:true, new:true}, callback);
}

// /deleteById
module.exports.deleteMovies = function(id, callback){
  var query = {_id: id};
  Movie.remove(query, callback);
}
