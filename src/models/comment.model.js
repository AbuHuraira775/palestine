const mongoose = require('mongoose');

// Define the Post schema
const commentSchema = new mongoose.Schema(
  {
    message: {
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
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
