const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const express = require("express");

const app = express();
app.use(express.json());

// Putting tood into the server.
app.post("/todo", async function (req, res) {
  const obj = req.body;

  const valid = createTodo.safeParse(obj);

  if (!valid.success) {
    res.status(411).json({
      msg: "Inputs are not valid!",
    });
    return;
  }

  await todo.create({
    title: obj.title,
    description: obj.description,
    completed: false,
  });

  res.json({
    msg: "Todo created.",
  });
});

// Fetching all the todos from the server.
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

// Marking the todo as completed.
app.put("/completed", async function (req, res) {
  const obj = req.body;
  const valid = updateTodo.safeParse(obj);

  if (!valid.success) {
    res.status(411).json({
      msg: "Inputs are invalid!",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "The todo is marked as done.",
  });
});

app.listen(3000);
