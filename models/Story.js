const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: new Date()
  }
});

StorySchema.index({ title: 'text', description: 'text' });

module.exports = Story = mongoose.model('story', StorySchema);
