import React from "react";
import "./styles.css";

const Cell = ({ isPaused, position, table, handleClick }) => {
  const { state, value } = table[position.i][position.j];

  const onClick = () => {
    handleClick(position);
  }

  return (
    <button 
      type="button"
      className={`cell ${state}`}
      onClick={onClick}
      disabled={isPaused || state !== "closed"}
    >
      {value}
    </button>
  );
}

export default Cell;
