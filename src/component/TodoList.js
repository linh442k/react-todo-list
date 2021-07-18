import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const TodoList = ({ todos }) => {
  const dispatch = useContext(TodoContext);
  const handleChangeCheckBox = (todo) => {
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
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
  );
};
// const TodoList = ({ todos }) => (
//   <ul>
//     {todos.map((todo) => (
//       <TodoItem key={todo.id} todo={todo} />
//     ))}
//   </ul>
// );

// const TodoItem = ({ todo }) => {
// const dispatch = useContext(TodoContext);
//   const handleChange = () =>
//     dispatch({
//       type: todo.complete ? "UNDO_TODO" : "DO_TODO",
//       id: todo.id,
//     });
//   return (
//     <li>
//       <label>
//         <input
//           type="checkbox"
//           checked={todo.complete}
//           onChange={handleChange}
//         />
//         {todo.task}
//       </label>
//     </li>
//   );
// };
export default TodoList;
