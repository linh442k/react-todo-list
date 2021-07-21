import React, { useContext } from "react";
// import TodoContext from "../context/TodoContext";
import GlobalContext from "../context/GlobalContext";
const TodoList = ({ todos }) => {
  const dispatch = useContext(GlobalContext);

  const handleChangeCheckBox = (todo) => {
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });
  };

  const handleDeleteBtn = (todo) => {
    dispatch({
      type: todo.deleted ? "RESTORE_TODO" : "DELETE_TODO",
      id: todo.id,
    });
  };

  const handlePermaDeleteBtn = (todo) => {
    var answer = window.confirm("Do you want to permanently delete the item?");
    if (answer) {
      dispatch({
        type: "PERMA_DELETE_TODO",
        id: todo.id,
      });
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label
            style={
              todo.complete
                ? {
                    /*textDecoration: "line-through",*/ color: "blue",
                  }
                : {}
            }
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChangeCheckBox(todo)}
            />
            {todo.task}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => handleDeleteBtn(todo)}
            >
              {todo.deleted ? "Restore" : "Delete"}
            </button>
            {todo.deleted ? (
              <button
                style={{ color: "red", marginLeft: "1rem" }}
                onClick={() => handlePermaDeleteBtn(todo)}
              >
                REMOVE
              </button>
            ) : (
              ""
            )}
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
