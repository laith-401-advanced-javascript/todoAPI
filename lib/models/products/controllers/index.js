const product = require("../model/products-model");


exports.listProduct = async (req, res) => {
  const results = await product.get();
  res.status(200).send({ count: results.length ,  results: results });
};


exports.getProduct = async (req, res) => {
  const results = await product.getById(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results });
};

exports.createProduct = async (req, res) => {
  try {
    console.log('Hate You ' );
    const results = await product.create(req.body);
    res.status(200).send({ count: results.length ,  results: results});
  } catch (err) {
    console.log('inside catch');
    res.status(400).send({ msg: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const results = await product.delete(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results});
};


exports.updateProduct = async (req, res) => {
  const results = await product.update(req.params.userId , req.body);
  res.status(200).send({ data: results });
};
