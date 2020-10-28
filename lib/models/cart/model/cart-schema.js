'use strict';
const mongoose = require('mongoose');

const carts = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String ,required: true},
  description: { type: String },
  price: { type: Number },
  inStock: { type: Number },
  img: { type: String }
});

module.exports = mongoose.model('carts', carts);
    
    