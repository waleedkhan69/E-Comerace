const mongoose = require('mongoose');
const debg = require('debug')('development:database');
const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      debg('connected123');
    })
    .catch((err) => {
      console.log('error', err);
    });
};

module.exports = connectDb;
