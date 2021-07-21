import uuid from "uuid/v4";
const defaultTodos = [
  {
    id: uuid(),
    task: "Learn React",
    complete: true,
    deleted: false,
  },
  {
    id: uuid(),
    task: "Learn Firebase",
    complete: true,
    deleted: true,
  },
  {
    id: uuid(),
    task: "Learn GraphQL",
    complete: false,
    deleted: false,
  },
];
const initialTodos =
  JSON.parse(localStorage.getItem("initial_todos")) || defaultTodos;
export default initialTodos;
