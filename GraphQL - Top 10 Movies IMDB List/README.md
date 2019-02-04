
This a GraphQL API which uses localhost server graphiql as a frontend.

The database is a MongoDB database which has top 10 rated movies from imdb website.
All the necessary node_modules such as 'graphql', 'express-graphql', 'mongoose' etc. are installed in the bash cmd.

The connection to mongodb takes place in "app.js"; wherein all the required node_modules are included.

    Then on "localhost:5000/graphql"; the automated graphiql UI opens up for MongoDB Json queries and mutations.

In the Schema folder: The "schema.js" file contains the RootQueryType with the Mutations. The 'movie.js" file from models folder is                             included in the "schema.js" file as it contains the MovieSchema.

For RootQueryType:

    /getAll - use "movies{ }" in the graphiql.
    /getAll (pagination) - use "movieslimit{ }" in the graphiql.
    /getById - use "movie(id :" "){ }" in the graphiql.
    /search - use "moviestring(imdb_rating :" ") { }" in the graphiql. (The string passed in the argument is imdb_rating)
    
For Mutation:

    /add - use "mutation{ addMovie(args){ } }" in the graphiql.
    /deleteById - use "deleteMovie(id:" "){ }" in the graphiql.
    /update - use "updateMovie(id to be updated:" ",args{ }" in the graphiql.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\THANK - YOU///////////////////////////////////////////////////////////////////

PROJECT CREATED BY - Prashant Wakchaure
          Email ID - prashant900555@gmail.com
       Contact No. - 8975366296

