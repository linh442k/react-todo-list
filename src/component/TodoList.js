import React from "react";
const TodoList = ({ dispatch, todos }) => {
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
// const TodoList = ({ dispatch, todos }) => (
//   <ul>
//     {todos.map((todo) => (
//       <TodoItem key={todo.id} dispatch={dispatch} todo={todo} />
//     ))}
//   </ul>
// );

// const TodoItem = ({ dispatch, todo }) => {
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
