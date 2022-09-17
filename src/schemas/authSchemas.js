import Joi from "joi";

const newUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  confirm_password: Joi.any().valid(Joi.ref("password")).required(),
  img: Joi.string().required(),
  cep: Joi.number().min(10000000).max(99999999).required(),
  numero: Joi.number().min(100000000).max(999999999).required(),
});

const loginSchema = Joi.object({
  email: Joi.required(),
  password: Joi.required(),
});

const updateSchema = Joi.object({
  email: Joi.required(),
  name: Joi.string(),
  img: Joi.string(),
  cep: Joi.string().min(8).max(8),
  numero: Joi.string().min(9).max(9),
});

export { newUserSchema, loginSchema, updateSchema };
