const { Comment } = require('../models');

const createComment = async (req) => {
    const comment = await Comment.create(req);
    return comment;
}

const getComment = async (author_id) => {
    return await Comment.findOne({
        author_id
    });
}

const deleteComment = async (author_id) => {
    return await Comment.deleteOne({
        author_id
    })
}
module.exports = {
    createComment,
    getComment,
    deleteComment
};