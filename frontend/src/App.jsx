import { useState } from "react";
import { CreateTodo } from "./components/CreateToDo";
import { Todos } from "./components/Todos";

function App() {
  const [todo, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todo}></Todos>
    </div>
  );
}

export default App;