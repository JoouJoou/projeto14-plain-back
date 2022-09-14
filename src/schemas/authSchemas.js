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
});

const loginSchema = Joi.object({
  email: Joi.required(),
  password: Joi.required(),
});

export { newUserSchema, loginSchema };
