'use strict';
const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String }
});

module.exports = mongoose.model('productsSchema', productsSchema);

