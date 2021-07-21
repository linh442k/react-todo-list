import React, { useState, useContext } from "react";
// import TodoContext from "../context/TodoContext";
import GlobalContext from "../context/GlobalContext";
import uuid from "uuid/v4";
const AddTodoForm = () => {
  const dispatch = useContext(GlobalContext);
  const [task, setTask] = useState("");
  const handleChangeInput = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    if (task.trim()) {
      // add new todo item
      dispatch({
        type: "ADD_TODO",
        task: task,
        id: uuid(),
      });
    }
    setTask("");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChangeInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default AddTodoForm;
