import "./App.css";
import React, { useState } from "react";
import uuid from "uuid/v4";

const initialTodos = [
  {
    id: uuid(),
    task: "Learn React",
    complete: true,
  },
  {
    id: uuid(),
    task: "Learn Firebase",
    complete: true,
  },
  {
    id: uuid(),
    task: "Learn GraphQL",
    complete: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState("");

  const handleChangeInput = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    if (task) {
      // add new todo item
      setTodos(todos.concat({ id: uuid(), task, complete: false }));
    }

    setTask("");

    event.preventDefault();
  };

  const handleChangeCheckBox = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label
              style={todo.complete ? { textDecoration: "line-through" } : {}}
            >
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckBox(todo.id)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default App;
