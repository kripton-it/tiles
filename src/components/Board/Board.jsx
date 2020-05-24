import React from "react";

import Cell from "../Cell";
// import { getStartTable } from "../../utils";

export const Board = ({ isStarted, table }) => {
  if (!isStarted) return null;
  // const startTable = getStartTable(size);

  const board = table.map((row, i) => {
    return (
      <div key={i}>{
        row.map((item, j) => {
          const position = {
            i, j
          }
          return <Cell key={j} value={item.value} position={position} state={item.state} />
        })
      }</div>
    )
  })
  return (
    <div>
      {board}
    </div>
  );
}

