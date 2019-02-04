const Story = require('../models/Story');
const mongoose = require('mongoose');
/**
 * @description Add new entry to database
 */
const add = async (req, res) => {
  const field = {};

  field.title = req.body.title;
  field.description = req.body.description;

  const story = new Story(field);
  await story.save();

  res.json({ message: 'Successfully added' });
};

/**
 * Get All entries from database with pagination
 */

const getAll = async (req, res) => {
  var pageNo = parseInt(req.query.pageNo);
  var size = parseInt(req.query.size);
  var response = {};

  var query = {};

  if (pageNo < 0 || pageNo == 0) {
    response.error = true;
    response.message = 'invalid page number';

    return res.status(404).json(response);
  }

  query.skip = size * (pageNo - 1);
  query.limit = size;

  Story.find({}, {}, query, (err, data) => {
    if (err) {
      response.error = true;
      response.message = 'Error fetching data';

      return res.status(400).json(response);
    }
    if (data.length > 0) {
      res.json(data);
    } else {
      response.error = true;
      response.message = 'Error fetching data';
      res.json(response);
    }
  });
};

/**
 * Get record by id
 */

const getById = async (req, res) => {
  var objectId = mongoose.Types.ObjectId;

  if (!objectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid document ID' });
  }

  const story = await Story.findById(req.params.id);
  if (story) {
    res.json(story);
  } else {
    res.status(404).json({ message: 'Story not found' });
  }
};

/**
 * Delete record by id
 */
const deleteById = async (req, res) => {
  var objectId = mongoose.Types.ObjectId;

  if (!objectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid document ID' });
  }

  Story.findByIdAndDelete(req.params.id)
    .then(res.json({ message: 'Successfully Deleted' }))
    .catch(err => console.log(err));
};

/**
 * Search
 */
const search = async (req, res) => {
  var query = req.query.query;

  Story.find({ $text: { $search: query } }, (err, data) => {
    if (data.length > 0) {
      res.json(data);
    } else {
      res
        .status(404)
        .json({ message: 'No document found with the related text' });
    }
  });
};

module.exports = {
  add,
  getAll,
  getById,
  deleteById,
  search
};
