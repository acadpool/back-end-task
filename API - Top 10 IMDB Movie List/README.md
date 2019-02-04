
This is a plain API which uses nodejs, expressjs, mongoose(MongoDB) and Postman for GET,POST,PUT,DELETE query handling and execution.

The database is a MongoDB database which has top 10 rated movies from imdb website.

All the necessary node_modules such as 'mongoose', 'express', 'bodyParser' etc. are installed in the bash cmd.

The connection to mongodb takes place in "app.js"; wherein all the required node_modules are included.
        
        mongoose.connect('mongodb://localhost/apiimdb', { useNewUrlParser: true });
   "apiimdb" is the database which is created in MongoDB server.
      
In the models folder: The "movies.js" file contains the MovieSchema along with all the modules.export.queryfunctions; 
                      The "movies.js" file is included in "app.js"; wherein, all the tasks are carried out.


    /getAll - use http://localhost:3000/movies/getAll 
         req = GET , res = json(movies)
    
    /getAll (pagination) - use http://localhost:3000/movies/getAllPagination 
         req = GET , res = json(movies)
    
    /getById - use http://localhost:3000/movies/getById/:_id 
         req = GET , res = json(movie)
    
    /search - use http://localhost:3000/movies/search/:genre 
         req = GET , res = json(movies)
           (The string passed in the argument is genre)

    /add - use http://localhost:3000/movies/add/ 
         req = POST , res = json(movie)
    
    /deleteById - use http://localhost:3000/movies/deleteById/:_id 
         req = DELETE , res = json(movie)
    
    /update - use http://localhost:3000/movies/movies/update/:_id 
         req = PUT , res = json(movie)

Please check the Screenshots folder for the queries and the execution in detail. Postman is used for the query handling and execution of the HTTP links given above.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\THANK - YOU///////////////////////////////////////////////////////////////////

PROJECT CREATED BY - Prashant Wakchaure
          Email ID - prashant900555@gmail.com
       Contact No. - 8975366296
