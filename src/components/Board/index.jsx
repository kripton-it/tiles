import React from "react";

import { Cell } from "../Cell";
import { getStartTable } from "../../utils";

export const Board = ({ size }) => {
  const startTable = getStartTable(size);

  const board = startTable.map((row, i) => {
    return (
      <div key={i}>{
        row.map((value, j) => {
          return <Cell key={j} value={value} state='closed' />
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

