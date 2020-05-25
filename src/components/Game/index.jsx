import React from "react";
import "./styles.css";

import Board from "../Board";
import Info from "../Info";
import Settings from "../Settings";

const Game = () => {
  return (
    <div className="game">
      <Settings />
      <Board />
      <Info />
    </div>
  );
}

export default Game;
