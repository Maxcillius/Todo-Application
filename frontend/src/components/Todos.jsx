import "./Todos.css";

export function Todo({ todos }) {
  return (
    <div className="Todos">
      {todos.map(function (todo) {
        return (
          <div className="item">
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
