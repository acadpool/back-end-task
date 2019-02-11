
# This a GraphQL API which uses localhost server graphiql as a frontend.

<h4>
The database is a MongoDB database which has top 10 rated movies from imdb website.
All the necessary node_modules such as 'graphql', 'express-graphql', 'mongoose' etc. are installed in the bash cmd using GIT.
</h4>

The connection to mongodb takes place in "app.js"; wherein all the required node_modules are included.
    
    mongoose.connect('mongodb://localhost/graphqlimdb', { useNewUrlParser: true });
"graphqlimdb" is the database name created in the MongoDB server.

    Then on "localhost:5000/graphql"; the automated graphiql UI opens up for MongoDB Json queries and mutations.

In the Schema folder: The "schema.js" file contains the RootQueryType with the Mutations. The 'movie.js" file from models folder is                             included in the "schema.js" file as it contains the MovieSchema.

For RootQueryType:

    /getAll - use "movies{ }" in the graphiql.

![add](https://github.com/prashant900555/back-end-task/blob/master/GraphQL%20-%20Top%2010%20Movies%20IMDB%20List/Screenshots/getAll.png?raw=true)

    /getAll (pagination) - use "movieslimit{ }" in the graphiql.
 
 ![add](https://github.com/prashant900555/back-end-task/blob/master/GraphQL%20-%20Top%2010%20Movies%20IMDB%20List/Screenshots/getAll%20(pagination).png?raw=true)
 
    /getById - use "movie(id :" "){ }" in the graphiql.
 
 ![add](https://github.com/prashant900555/back-end-task/blob/master/GraphQL%20-%20Top%2010%20Movies%20IMDB%20List/Screenshots/getById.png?raw=true)
 
    /search - use "moviestring(imdb_rating :" ") { }" in the graphiql. (The string passed in the argument is imdb_rating)
    
 ![add](https://github.com/prashant900555/back-end-task/blob/master/GraphQL%20-%20Top%2010%20Movies%20IMDB%20List/Screenshots/search.png?raw=true)    
    
For Mutation:

    /add - use "mutation{ addMovie(args){ } }" in the graphiql.
    
  ![add](https://github.com/prashant900555/back-end-task/blob/master/GraphQL%20-%20Top%2010%20Movies%20IMDB%20List/Screenshots/add.png?raw=true)   
    
    /deleteById - use "deleteMovie(id:" "){ }" in the graphiql.
    
![add](https://github.com/prashant900555/back-end-task/blob/master/GraphQL%20-%20Top%2010%20Movies%20IMDB%20List/Screenshots/delete.png?raw=true)    
    
    /update - use "updateMovie(id to be updated:" ",args{ }" in the graphiql.

![add](https://github.com/prashant900555/back-end-task/blob/master/GraphQL%20-%20Top%2010%20Movies%20IMDB%20List/Screenshots/update.png?raw=true)    

Please check the Screenshots folder for the queries and the execution in detail.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\THANK - YOU///////////////////////////////////////////////////////////////////

    PROJECT CREATED BY - Prashant Wakchaure
    Email ID - prashant900555@gmail.com
    Contact No. - 8975366296
