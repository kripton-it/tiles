import React from "react";

import Cell from "../Cell";

export const Board = ({ isStarted, table }) => {
  if (!isStarted) return null;

  const board = table.map((row, i) => {
    return (
      <div key={i}>{
        row.map((item, j) => {
          const position = {
            i, j
          }
          return <Cell key={j} position={position} />
        })
      }</div>
    )
  });

  return (
    <div className="game-board">
      {board}
    </div>
  );
}

