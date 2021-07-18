import "./App.css";
import React, { useReducer } from "react";
import FilterButtons from "./component/FilterButtons";
import TodoList from "./component/TodoList";
import AddTodoForm from "./component/AddTodoForm";
import filterReducer from "./reducer/filter";
import todoReducer from "./reducer/todo";
import initialTodos from "./asset/initialTodos";

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
  console.log(filteredTodos);
  return (
    <div>
      <FilterButtons dispatch={dispatchFilterTodos} />
      <TodoList dispatch={dispatchTodos} todos={filteredTodos} />
      <AddTodoForm dispatch={dispatchTodos} />
    </div>
  );
};

export default App;
