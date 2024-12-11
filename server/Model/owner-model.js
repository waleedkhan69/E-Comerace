const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Product: {
    type: Array,
    default: [],
  },
  gstin: {
    type: String,
    trim: true,
  },
  picture: {
    type: String,
    trim: true,
  },
});

// Create and export a function to get the model
module.exports = mongoose.model('Owner', ownerSchema);
