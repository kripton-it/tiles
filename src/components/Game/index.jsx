import React from "react";
import "./styles.css";

import Board from "../Board";
import { Info } from "../Info";
import Settings from "../Settings";

const Game = () => {
  return (
    <div className="game">
      <div className="game-settings">
        <Settings />
      </div>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <Info />
      </div>
    </div>
  );
}

export default Game;
