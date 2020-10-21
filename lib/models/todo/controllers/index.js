const Todo = require("../model/todo-model");


exports.listTodo = async (req, res) => {
  const results = await Todo.get();
  res.status(200).send({ count: results.length ,  results: results });
};


exports.getTodo = async (req, res) => {
  const results = await Todo.getById(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results });
};

exports.createTodo = async (req, res) => {
  try {
    console.log('Hate You ' );
    const results = await Todo.create(req.body);
    res.status(200).send({ count: results.length ,  results: results});
  } catch (err) {
    console.log('inside catch');
    res.status(400).send({ msg: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const results = await Todo.delete(req.params.userId);
  res.status(200).send({ count: results.length ,  results: results});
};


exports.updateTodo = async (req, res) => {
  const results = await Todo.update(req.params.userId , req.body);
  res.status(200).send({ data: results });
};
