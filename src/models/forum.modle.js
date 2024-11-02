const mongoose = require('mongoose');

// Define the Post schema
const forumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      // default: Date.now,
    },
    author_id: {
      // type: mongoose.Schema.Types.ObjectId, // Assuming author_id references a User model
      type: String, // Assuming author_id references a User model
      // ref: 'User',
      required: true,
    },
  },
  {
    timestamps: 
    { createdAt: 'createdDate', updatedAt: 'updateDate' }, // Automatically adds createdDate and updateDate
  }
);

// Create the Post model using the schema
const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
