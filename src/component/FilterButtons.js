import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
const FilterButtons = () => {
  const dispatch = useContext(GlobalContext);

  const [displayBtn, setDisplayBtn] = useState(false);
  const [listDetail, setListDetail] = useState("All Items");

  const handleShowAll = () => {
    setDisplayBtn((displayBtn) => !displayBtn);
    // setDisplayBtn(true);
    setListDetail("All Items");
    dispatch({ type: "SHOW_ALL" });
  };

  const handleShowDeleted = () => {
    setDisplayBtn(false);
    setListDetail("All Deleted Items");
    dispatch({ type: "SHOW_DELETED" });
  };

  const handleShowComplete = () => {
    setListDetail("All Complete Items");
    dispatch({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    setListDetail("All Incomplete Items");
    dispatch({ type: "SHOW_INCOMPLETE" });
  };

  const showAllBtn = (
    <button type="button" onClick={handleShowAll}>
      Show All
    </button>
  );

  const showDeletedBtn = (
    <button type="button" onClick={handleShowDeleted}>
      Show Deleted
    </button>
  );

  const showCompleteBtn = displayBtn ? (
    <button type="button" onClick={handleShowComplete}>
      Show Complete
    </button>
  ) : (
    ""
  );

  const showIncompleteBtn = displayBtn ? (
    <button type="button" onClick={handleShowIncomplete}>
      Show Incomplete
    </button>
  ) : (
    ""
  );
  return (
    <div>
      {showAllBtn}
      {showDeletedBtn}
      <br />
      {showCompleteBtn}
      {showIncompleteBtn}
      <br />
      {listDetail}
    </div>
  );
};
export default FilterButtons;
