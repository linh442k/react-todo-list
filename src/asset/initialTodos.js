import uuid from "uuid/v4";
const initialTodos = [
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
export default initialTodos;
