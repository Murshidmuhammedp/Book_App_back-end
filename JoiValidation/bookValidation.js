import Joi from 'joi';

const bookjoi = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    description: Joi.string().required()
});

export default bookjoi;