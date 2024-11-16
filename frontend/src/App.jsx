import SideBar from "./components/SideBar";
import TodoCard from "./components/TodoCard";
import { useRecoilState } from "recoil";
import { todoAtom } from "./store/atoms/Todo";
import { useEffect } from "react";
import { format, isToday, isYesterday } from "date-fns";
import Greetings from "./components/Greetings";
import AddTodo from "./components/AddTodo";

function formateDate(dateString) {
  const parsedDate = new Date(dateString);
  return isToday(parsedDate)
    ? "Today"
    : isYesterday(parsedDate)
    ? "Yesterday"
    : format(parsedDate, "EEEE, MMM d");
}

function getDate() {
  return format(new Date(), "EEEE, do MMMM yyyy");
}

function App() {
  const [todos, setTodo] = useRecoilState(todoAtom);

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
      <div className="flex">
        <SideBar name={"Nihal upreti"} pendingTodo={3} />
        <div className="bg-gray100 flex-1 flex-column">
          <Greetings userName={"Nihal Upreti"} date={getDate()} />
          <AddTodo />
          {todos.map((todo) => {
            return (
              <TodoCard
                key={todo._id}
                title={todo.title}
                due={formateDate(todo.due)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

// function PostTodo() {
//   const setTodo = useSetRecoilState(todoAtom);

//   let todo = {};

//   function submitTodo() {
//     fetch("http://localhost:3000/todo", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(todo),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to save the todo into the database.");
//         }
//         return response.json();
//       })
//       .then(() => {
//         console.log("saved to the database");
//         setTodo((prevTodo) => [...prevTodo, todo]);
//         todo = {};
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         name="title"
//         placeholder="title"
//         onChange={(e) => {
//           todo["title"] = e.target.value;
//         }}
//       />
//       <br />
//       <input
//         type="text"
//         name="description"
//         placeholder="description"
//         onChange={(e) => {
//           todo["description"] = e.target.value;
//         }}
//       />
//       <br />
//       <button onClick={submitTodo} className="bg-red-500">
//         Add
//       </button>
//     </div>
//   );
// }

export default App;
