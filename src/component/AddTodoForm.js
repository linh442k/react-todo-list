import React, { useState } from "react";
import uuid from "uuid/v4";
const AddTodoForm = ({ dispatch }) => {
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
