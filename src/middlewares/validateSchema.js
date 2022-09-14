export function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: true,
    });

    if (error) {
      const messageError = error.details.map((item) => item.message);
      return res.status(422).send(messageError);
    }

    next();
  };
}
