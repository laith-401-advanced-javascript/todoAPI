'use strict';

const todoSchema = require("../model/todo-schema");

class Todo {
  constructor() {
    this.schema = todoSchema;
  }

  async get(_id) {
    return await _id ? this.schema.find({ _id: _id }) : this.schema.find();
  }
  getById(userId) {
    return this.schema.findOne({ _id: userId });
  }

  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findOneAndUpdate({ _id }, record, { new: true });
  }

  delete(_id) {
    return this.schema.deleteOne({ _id: _id });
  }
}


module.exports = new Todo();
