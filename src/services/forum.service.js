const { Forum } = require('../models');

const createForum = async (req) => {
  const forum = await Forum.create(req);
  return forum;
};

const getForum = async (id) => {
  return await Forum.findOne({
    author_id: id,
  });
};

const deleteForum = async (id) => {
  return await Forum.deleteOne({
    author_id: id,
  });
};
module.exports = {
  createForum,
  getForum,
  deleteForum,
};
