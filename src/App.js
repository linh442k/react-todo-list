import "./App.css";
import React, { useState, useReducer } from "react";
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
  const filterReducer = (state, action) => {
    switch (action.type) {
      case "SHOW_ALL":
        return "ALL";
      case "SHOW_COMPLETE":
        return "COMPLETE";
      case "SHOW_INCOMPLETE":
        return "INCOMPLETE";
      default:
        throw new Error();
    }
  };

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "DO_TODO":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: true };
          } else {
            return todo;
          }
        });
      case "UNDO_TODO":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: false };
          } else {
            return todo;
          }
        });
      case "ADD_TODO":
        return state.concat({
          task: action.task,
          id: action.id,
          complete: false,
        });
      default:
        throw new Error();
    }
  };

  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [task, setTask] = useState("");
  const [filterTodos, dispatchFilterTodos] = useReducer(filterReducer, "ALL");

  const handleShowAll = () => {
    dispatchFilterTodos({ type: "SHOW_ALL" });
  };

  const handleShowComplete = () => {
    dispatchFilterTodos({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    dispatchFilterTodos({ type: "SHOW_INCOMPLETE" });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterTodos === "ALL") {
      return true;
    }

    if (filterTodos === "COMPLETE" && todo.complete) {
      return true;
    }

    if (filterTodos === "INCOMPLETE" && !todo.complete) {
      return true;
    }

    return false;
  });

  const handleChangeInput = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    if (task.trim()) {
      // add new todo item
      dispatchTodos({
        type: "ADD_TODO",
        task: task,
        id: uuid(),
      });
    }

    setTask("");

    event.preventDefault();
  };

  const handleChangeCheckBox = (todo) => {
    dispatchTodos({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });
  };

  return (
    <div>
      <div>
        <button type="button" onClick={handleShowAll}>
          Show All
        </button>
        <button type="button" onClick={handleShowComplete}>
          Show Complete
        </button>
        <button type="button" onClick={handleShowIncomplete}>
          Show Incomplete
        </button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <label
              style={todo.complete ? { textDecoration: "line-through" } : {}}
            >
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckBox(todo)}
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
