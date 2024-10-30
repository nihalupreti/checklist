import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error occured status" + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setTodo((prevTodos) => [...prevTodos, ...data]);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);

  return (
    <>
      <PostTodo />
      <GetTodo todos={Todo} />
    </>
  );
}

function PostTodo() {
  //const [Todo, setTodo] = useState([])

  let todo = {};

  function submitTodo() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save the todo into the database.");
        }
        return response.json();
      })
      .then(() => {
        console.log("saved to the database");
        todo = {};
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => {
          todo["title"] = e.target.value;
        }}
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => {
          todo["description"] = e.target.value;
        }}
      />
      <br />
      <button onClick={submitTodo}>Add</button>
    </div>
  );
}

function GetTodo({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
