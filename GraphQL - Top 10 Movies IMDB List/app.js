const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//MongoDB connection
mongoose.connect('mongodb://localhost/graphqlimdb', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database...');
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000,() => {
  console.log('Listening for requests on port 5000...');
});
