const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//connect to db
mongoose.connect(
  'mongodb://abhishek1999:abhishek1999@ds221095.mlab.com:21095/backend-task',
  { useNewUrlParser: true }
);

//routes
const story = require('./api/routes/story');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/story', story);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
