const cart = require("../model/cart-model");


exports.listCart = async (req, res) => {
  const results = await cart.get();
  res.status(200).send({ count: results.length ,  results: results });
};


exports.getCart = async (req, res) => {
  const results = await cart.getById(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results });
};

exports.createCart = async (req, res) => {
  try {
    console.log('Hate You ' );
    const results = await cart.create(req.body);
    res.status(200).send({ count: results.length ,  results: results});
  } catch (err) {
    console.log('inside catch');
    res.status(400).send({ msg: err.message });
  }
};

exports.deleteCart = async (req, res) => {
  const results = await cart.delete(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results});
};


exports.updateCart = async (req, res) => {
  const results = await cart.update(req.params.userId , req.body);
  res.status(200).send({ data: results });
};
