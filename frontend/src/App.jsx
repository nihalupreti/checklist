import Filter from "./components/Filter";
import GetTodo from "./components/GetTodo";
import "./App.css";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { todoAtom } from "./store/atoms/Todo";

function App() {
  return (
    <>
      <RecoilRoot>
        <PostTodo />
        <Filter />
        <GetTodo />
      </RecoilRoot>
    </>
  );
}

function PostTodo() {
  const setTodo = useSetRecoilState(todoAtom);

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
        setTodo((prevTodo) => [...prevTodo, todo]);
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
      <button onClick={submitTodo} className="bg-red-500">
        Add
      </button>
    </div>
  );
}

export default App;
