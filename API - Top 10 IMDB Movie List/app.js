var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// importing movies.js file
Movie = require('./models/movies');

app.use(bodyParser.json());

//Connection to mongoose
mongoose.connect('mongodb://localhost/apiimdb', { useNewUrlParser: true });
var db = mongoose.connection;

// /getAll
app.get('/movies/getAll', function(req, res){
  Movie.getAllMovies(function(err, movies){
    if(err){
      throw err;
    }
    res.json(movies);
  });
});

// /getAll (pagination)
app.get('/movies/getAllPagination', function(req, res){
  Movie.getAllMoviesUsingPagination(function(err, movies){
    if(err){
      throw err;
    }
    res.json(movies);
  });
});

// /getById
app.get('/movies/getById/:_id', function(req, res){
  Movie.getMoviesById(req.params._id, function(err, movie){
    if(err){
      throw err;
    }
    res.json(movie);
  });
});

// /search
app.get('/movies/search/:genre', function(req, res){
  Movie.getMoviesByString(req.params.genre, function(err, movies){
    if(err){
      throw err;
    }
    res.json(movies);
  });
});

// /add
app.post('/movies/add/', function(req, res){
  var movie = req.body;
  Movie.addMovies(movie, function(err, movie){
    if(err){
      throw err;
    }
    res.json(movie);
  });
});

// /update
app.put('/movies/update/:_id', function(req, res){
  var id = req.params._id;
  var movie = req.body;
  Movie.updateMovies(id, movie,{}, function(err, movie){
    if(err){
      throw err;
    }
    res.json(movie);
  });
});

// /deleteById
app.delete('/movies/deleteById/:_id', function(req, res){
  var id = req.params._id;
  Movie.deleteMovies(id, function(err, movie){
    if(err){
      throw err;
    }
    res.json(movie);
  });
});


app.listen(3000);
console.log('Running on port 3000...');
