import React from "react";
import "./styles.css";

const Cell = ({ clicked, current, isPaused, incClicked, resetCurrent, updateCellState, position, setCurrent, table, timer, value, setTimer, togglePause }) => {
  const { state } = table[position.i][position.j]
  const handleClick = () => {
    if (!current) {
      // первая ячейка
      updateCellState(position, 'temp');
      setCurrent(position, table[position.i][position.j].value);
      const timerId = setTimeout(() => {
        updateCellState(position, 'closed');
        resetCurrent();
      }, 30000);
      setTimer(timerId);
    } else if (current.value === table[position.i][position.j].value) {
      // угадали
      updateCellState(current.position, 'correct');
      updateCellState(position, 'correct');
      resetCurrent();
      clearTimeout(timer);
      setTimer(null);
    } else {
      // не угадали
      clearTimeout(timer);
      updateCellState(current.position, 'error');
      updateCellState(position, 'error');
      togglePause();
      setTimeout(() => {
        togglePause();
        updateCellState(current.position, 'closed');
        updateCellState(position, 'closed');
        resetCurrent();
      }, 3000);
    }
  }
  return (
    <button type="button" className={`cell ${state}`} onClick={handleClick} disabled={state !== 'closed' || isPaused}>
      {value}
    </button>
  );
}

export default Cell;
