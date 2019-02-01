const Story = require('../models/Story');

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
 * Get All entries from database
 */

const getAll = async (req, res) => {
  const stories = await Story.find();

  if (stories.length < 1) {
    return res.json({ message: 'Empty List' });
  }

  res.json(stories);
};

module.exports = {
  add,
  getAll
};
