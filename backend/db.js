const mong = require("mongoose");
const { boolean } = require("zod");

mong.connect("mongodb+srv://admin:Admin123@cluster0.1hu1yx6.mongodb.net/");

const schema = mong.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mong.model("Todo", schema);

module.exports = {
  todo,
};
