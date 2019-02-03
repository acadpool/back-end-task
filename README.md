The api works for all the required functions i.e.

/getAll - To get all the entries in your database(with pagination support if you can).
/getById - To get just one entry by ID.
/search - To get all the entries in your database with at least one attribute containing the string that is passed in the arguments.
/add - To add a new entry in the database.
/deleteById - To delete an entry by ID.
 
This api works on oracle database and also have some additional function like changing password of the user etc.

Requirements --		>require('http')
			>require('express')
			>require('morgan')
			>require('oracledb')
			

How to use the functions :

>getAll -	USE - To get all the informations of all the users.
		URL - http://localhost:3000/api/users/getAll
		REQUEST - get
		RESPOND - JSON data

>getById -	USE - To get all the information of a user having the required user id.
		URL - http://localhost:3000/api/users/getById/:id?
		REQUEST - get
		RESPOND - JSON data

>search - 	USE - To serach a string throughout the database(except the password column for security purpose).
		URL - http://localhost:3000/api/users/search/:tag?
		REQUEST - get
		RESPOND - JSON data

>add - 		USE - To add new user tothe database.
		URL - http://localhost:3000/api/users/add
		REQUEST - post
		CONTEXT TYPE - application/JSON
		DATA FORMAT - {
				"name":"<name>",
  				"password": "<password>",
  				"email": "<email>",
  				"city": "<city>",
  				"address": "<address>",
  				"contact": "<phone number>"
			      }
		RESPOND - User id if data added.

>deleteById - 	USE - To delete a user from the database.

		URL - http://localhost:3000/api/users/deleteById/:id?
		REQUEST - delete
		RESPOND - 	status = 204 if user id found and deleted
				status = 404 if user id not found.

>password - 	USE - To change the password of given user.
		URL - http://localhost:3000/api/users/change/:id?/password
		REQUEST - put
		CONTEXT TYPE - application/JSON
		DATA FORMAT - 	{
				  "password": "<new password>"
				}
		RESPOND - 	status = 200 if user id found and password changed
				status = 404 if user id not found.
				status = 400 if user id not entered.

CREATED BY -> 	SHUBHAM KUMAR
		EMAIL ID : shukhu10@gmail.com
		CONTACT : +91 9748669897
