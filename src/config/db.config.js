const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.DATABASE_URL;
    await mongoose.connect(url);
    console.log("The database was successfully connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDB };
