const  mongoose =require('mongoose');

const commentSchema = mongoose.Schema(
    {
        comment: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        postId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Post',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Comment', commentSchema)