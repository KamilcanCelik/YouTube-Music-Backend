const CustomError = require('../../errors/CustomError');

const isImageExist = (req, res, next) => {
  const { savedSingleImage } = req;

  if (!savedSingleImage) {
    return next(new CustomError('Image field is required', 400));
  }

  next();
};

const isFieldsExist = (req, res, next) => {
  const { name, description, publicationYear } = req.body;

  if (!name) {
    return next(new CustomError('Name field is required', 400));
  }

  if (!publicationYear) {
    return next(new CustomError('Publication year field is required', 400));
  }

  next();
};

module.exports = {
  isImageExist,
  isFieldsExist,
};
