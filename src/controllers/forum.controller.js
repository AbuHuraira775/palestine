const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { forumService } = require('../services');

const createForum = catchAsync(async (req, res) => {
  const forum = await forumService.createForum(req.body);
  res.status(httpStatus.CREATED).send(forum);
});

const getForum = catchAsync(async (req, res) => {
  const forum = await forumService.getForum(req.params.id);
  res.send(forum);
});

const deleteForum = catchAsync(async (req, res) => {
  await forumService.deleteForum(req.params.id);
  res.status(httpStatus.NO_CONTENT).send(); 
});

module.exports = {
    createForum,
    getForum,
    deleteForum
};
