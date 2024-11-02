const Joi = require('joi');

const createComment = {
  body: Joi.object().keys({
    message: Joi.string().required(),
    date: Joi.string().required(),
    author_id: Joi.string().required(),
  }),
};

const getComment = {
  query: Joi.object().keys({
    author_id: Joi.string().required(),
  }),
};

const deleteComment = {
  query: Joi.object().keys({
    author_id: Joi.string().required(),
  }),
}
module.exports = {
    createComment,
    getComment,
    deleteComment
};
