const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    console.log('urllllllllll----------',url,'=====');
    
    await mongoose.connect(url);

    console.log("The database was successfully connected");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
};

module.exports = { connectDB };