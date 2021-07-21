const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO": {
      const newState = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
      localStorage.setItem("initial_todos", JSON.stringify(newState));
      return newState;
    }
    case "UNDO_TODO": {
      const newState = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
      localStorage.setItem("initial_todos", JSON.stringify(newState));
      return newState;
    }
    case "ADD_TODO": {
      const newState = state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
      localStorage.setItem("initial_todos", JSON.stringify(newState));
      return newState;
    }
    case "DELETE_TODO": {
      const newState = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, deleted: true };
        } else {
          return todo;
        }
      });
      localStorage.setItem("initial_todos", JSON.stringify(newState));
      return newState;
    }
    case "RESTORE_TODO": {
      const newState = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, deleted: false };
        } else {
          return todo;
        }
      });
      localStorage.setItem("initial_todos", JSON.stringify(newState));
      return newState;
    }
    case "PERMA_DELETE_TODO": {
      const newState = state.filter(function (todo) {
        return todo.id !== action.id;
      });
      localStorage.setItem("initial_todos", JSON.stringify(newState));
      return newState;
    }
    default:
      // throw new Error();
      return state;
  }
};
export default todoReducer;
