const  Routes  = require('express').Router();
const {getComments, createComment, updateComment, deleteComment} = require('../../controllers/comments.controller');

Routes.get('/', getComments);
Routes.post('/',createComment)
Routes.put('/:commentId', updateComment);
Routes.delete('/:commentId', deleteComment);

module.exports = Routes;
