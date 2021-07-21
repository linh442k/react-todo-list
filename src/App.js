import React, { useReducer } from "react";
import FilterButtons from "./component/FilterButtons";
import TodoList from "./component/TodoList";
import AddTodoForm from "./component/AddTodoForm";
import filterReducer from "./reducer/filter";
import todoReducer from "./reducer/todo";
import initialTodos from "./asset/initialTodos";
// import TodoContext from "./context/TodoContext";
import GlobalContext from "./context/GlobalContext";
import "./App.css";

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filterTodos, dispatchFilterTodos] = useReducer(filterReducer, "ALL");
  const globalDispatch = (action) => {
    [dispatchTodos, dispatchFilterTodos].forEach((fn) => fn(action));
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

  return (
    <div>
      <GlobalContext.Provider value={globalDispatch}>
        <FilterButtons />
        <TodoList todos={filteredTodos} />
        <AddTodoForm />
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
