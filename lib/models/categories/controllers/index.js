const categorie = require("../model/categories-model");


exports.listCategorie = async (req, res) => {
  const results = await categorie.get();
  res.status(200).send({ count: results.length ,  results: results });
};


exports.getCategorie = async (req, res) => {
  const results = await categorie.getById(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results });
};

exports.createCategorie = async (req, res) => {
  try {
    console.log('Hate You ' );
    const results = await categorie.create(req.body);
    res.status(200).send({ count: results.length ,  results: results});
  } catch (err) {
    console.log('inside catch');
    res.status(400).send({ msg: err.message });
  }
};

exports.deleteCategorie = async (req, res) => {
  const results = await categorie.delete(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results});
};


exports.updateCategorie = async (req, res) => {
  const results = await categorie.update(req.params.userId , req.body);
  res.status(200).send({ data: results });
};
