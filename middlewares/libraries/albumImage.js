const multer = require('multer');
const path = require('path');
const CustomError = require('../../errors/CustomError');
const { nanoid } = require('nanoid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootDir = path.dirname(require.main.filename);
    cb(null, path.join(rootDir, '/public/albums'));
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split('/')[1];
    let randomId = nanoid(30);
    req.savedAlbumImage =
      'image_' + file.originalname + '_' + randomId + '.' + extension;
    cb(null, req.savedAlbumImage);
  },
});

const fileFilter = (req, file, cb) => {
  let allowedMimeTypes = ['image/jpg', 'image/png', 'image/gif', 'image/jpeg'];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    return cb(new CustomError('Please provide a valid image file', 400), false);
  }

  return cb(null, true);
};
const albumImage = multer({ storage, fileFilter });

module.exports = { albumImage };
