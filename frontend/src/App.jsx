import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateToDo";
import { Todo } from "./components/Todos";

function App() {
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
      Fetching(false);
    });
  }, []);

  return (
    <>
      <CreateTodo />
      <Todo todos={todo}></Todo>
    </>
  );
}

export default App;
