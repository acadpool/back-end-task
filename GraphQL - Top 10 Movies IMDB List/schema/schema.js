const graphql = require('graphql');

const Movie = require('../models/movie');

const{
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull} = graphql;

 const MovieType = new GraphQLObjectType({
    name:'Movie',
    fields: () => ({
      id: {type: GraphQLID},
      movie:{type: GraphQLString},
      genre:{type: GraphQLString},
      duration: {type: GraphQLString},
      date_of_release:{type: GraphQLString},
      director:{type: GraphQLString},
      trailer_link:{type: GraphQLString},
      imdb_rating:{type: GraphQLFloat},
      imdb_rank:{type: GraphQLInt}
    })
  });

  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

      // /getByID
      movie: {
        type: MovieType,
        args: {id: {type: GraphQLID} },
        resolve(parent, args){
          return Movie.findById(args.id);
        }
      },

      // /getAll
      movies: {
        type: new GraphQLList(MovieType),
        resolve(parent, args){
          return Movie.find({});
        }
      },

      // /getAll (pagination)
      movieslimit: {
        type: new GraphQLList(MovieType),
        resolve(parent, args){
          return Movie.find({}).limit(5);
        }
      },

      // /search
      moviestring: {
        type: new GraphQLList(MovieType),
        args: {imdb_rating: {type: new GraphQLNonNull(GraphQLFloat)}},
        resolve(parent, args){
          return Movie.find({imdb_rating: args.imdb_rating});
        }
      },

    }
  });

  const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {

      // /add
      addMovie: {
        type: MovieType,
        args:{
          movie: {type: new GraphQLNonNull(GraphQLString)},
          genre: {type: new GraphQLNonNull(GraphQLString)},
          duration: {type: new GraphQLNonNull(GraphQLString)},
          date_of_release: {type: new GraphQLNonNull(GraphQLString)},
          director: {type: new GraphQLNonNull(GraphQLString)},
          trailer_link: {type: new GraphQLNonNull(GraphQLString)},
          imdb_rating: {type: new GraphQLNonNull(GraphQLFloat)},
          imdb_rank: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve(parent, args){
          let movie = new Movie({
            movie: args.movie,
            genre: args.genre,
            duration: args.duration,
            date_of_release: args.date_of_release,
            director: args.director,
            trailer_link: args.trailer_link,
            imdb_rating: args.imdb_rating,
            imdb_rank: args.imdb_rank
          });
          return movie.save();
        }
      },

      // /deleteById
      deleteMovie:{
        type: MovieType,
        args: {
          id: {type: new GraphQLNonNull(GraphQLID)}
        },
        resolve(parent, args) {
          return Movie.findByIdAndDelete(args.id);
        }
      },

      // /update
      updateMovie:{
        type: MovieType,
        args: {
          id: {type: new GraphQLNonNull(GraphQLID)},
          movie: {type: new GraphQLNonNull(GraphQLString)},
          genre: {type: new GraphQLNonNull(GraphQLString)},
          duration: {type: new GraphQLNonNull(GraphQLString)},
          date_of_release: {type: new GraphQLNonNull(GraphQLString)},
          director: {type: new GraphQLNonNull(GraphQLString)},
          trailer_link: {type: new GraphQLNonNull(GraphQLString)},
          imdb_rating: {type: new GraphQLNonNull(GraphQLFloat)},
          imdb_rank: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve(parent, args){
          return Movie.findOneAndUpdate(
          {"_id": args.id},{"$set":{movie: args.movie,
          genre: args.genre,
          duration: args.duration,
          date_of_release: args.date_of_release,
          director: args.director,
          trailer_link: args.trailer_link,
          imdb_rating: args.imdb_rating,
          imdb_rank: args.imdb_rank}},{"new": true});
        }
      }

    }
  });

  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });
