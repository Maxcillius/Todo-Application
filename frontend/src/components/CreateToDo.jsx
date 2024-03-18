import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        placeholder="title"
      ></input>{" "}
      <br />
      <input
        type="text"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
        placeholder="description"
      ></input>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          }).then(async function (res) {
            const json = await res.json();
            console.log(json);
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
