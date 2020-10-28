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

    // "name": "TV",
    // "category": "electronics",
    // "description": "Best TVs: have breaking bad series",
    // "price": 699,
    // "inStock": 21,
    // "img": "https://source.unsplash.com/random?TV",
    
    