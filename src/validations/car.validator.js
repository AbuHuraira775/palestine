const Joi = require('joi');
const { password } = require('./custom.validation');

const createCat = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().required(),
  }),
};

const getCar = {
  query: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const deleteCar = {
  query: Joi.object().keys({
    name: Joi.string().required(),
  }),
}
module.exports = {
  createCat,
  getCar,
  deleteCar
};
