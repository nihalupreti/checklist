import { todoAtom } from "../store/atoms/Todo";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterTodo } from "../store/atoms/Todo";

export default function GetTodo() {
  const setTodo = useSetRecoilState(todoAtom);
  const todos = useRecoilValue(filterTodo);

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
