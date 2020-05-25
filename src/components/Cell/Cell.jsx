import React from "react";
import "./styles.css";

export const Cell = ({ isPaused, position, size, table, handleClick }) => {
  const { state, value } = table[position.i][position.j];

  const onClick = () => {
    handleClick(position);
  }

  return (
    <button 
      type="button"
      className={`cell-${state} cell-${size}`}
      onClick={onClick}
      disabled={isPaused || state !== "closed"}
    >
      {value}
    </button>
  );
}
