const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { commentService, carService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  const comment = await commentService.createComment(req.body);
  res.status(httpStatus.CREATED).send(comment);
});

const getComment = catchAsync(async (req, res) => {
  const comment = await commentService.getComment(req.query.author_id);
  res.send(comment);
});

const deleteComment = catchAsync(async (req, res) => {
  await commentService.deleteComment(req.query.author_id);
  res.status(httpStatus.NO_CONTENT).send(); 
});

module.exports = {
    createComment,
    getComment,
    deleteComment
};
