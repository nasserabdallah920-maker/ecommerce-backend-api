const multer = require("multer");
const path = require("path");
const AppError = require("./apperror");
const crypto=require('crypto')
const { StatusCode } = require("./status");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    const arr = file.originalname.split(".");
    const ext = arr[arr.length - 1];
    const random = crypto.randomBytes(16).toString("hex")

    cb(null, `${random}.${ext}`);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(
      new AppError("Only image files are allowed", StatusCode.BAD_REQUEST),
      false,
    );
  }
};

const uploads = multer({ storage, fileFilter });
module.exports = uploads;
