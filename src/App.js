import "./App.css";
import React, { useReducer, createContext } from "react";
import FilterButtons from "./component/FilterButtons";
import TodoList from "./component/TodoList";
import AddTodoForm from "./component/AddTodoForm";
import filterReducer from "./reducer/filter";
import todoReducer from "./reducer/todo";
import initialTodos from "./asset/initialTodos";
import { TodoContext } from "./context/TodoContext";

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filterTodos, dispatchFilterTodos] = useReducer(filterReducer, "ALL");
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
  return (
    <div>
      <TodoContext.Provider value={dispatchTodos}>
        <FilterButtons dispatch={dispatchFilterTodos} />
        <TodoList todos={filteredTodos} />
        <AddTodoForm />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
