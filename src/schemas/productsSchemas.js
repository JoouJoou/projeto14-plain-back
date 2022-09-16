import joi from "joi";

const insertProductSchema = joi.object({
  name: joi.string().required(),
  type: joi.string().valid("vestuário", "acessórios", "calçados").required(),
  img: joi.string().required(),
  amount: joi.number().required(),
  price: joi.number().required(),
});

export { insertProductSchema };
