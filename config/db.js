const mongoose = require('mongoose');
const config = require('config');
const dbURI = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }); 
    console.info('MongoDB connected...');
  }
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;