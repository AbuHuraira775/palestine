const Joi = require('joi');
// const { password } = require('./custom.validation');

const createForum = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.string().required(),
    author_id: Joi.number().required(),
  }),
};

const getForum = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const deleteForum = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}
module.exports = {
    createForum,
    getForum,
    deleteForum
};
