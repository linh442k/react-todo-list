const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    case "SHOW_DELETED":
      return "DELETED";
    default:
      // throw new Error();
      return state;
  }
};
export default filterReducer;
