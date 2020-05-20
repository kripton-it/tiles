import React from 'react';
import './styles.css';

import { Board } from "./Board";
import { Info } from "./Info";

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board size={2} />
      </div>
      <div className="game-info">
        <Info />
      </div>
    </div>
  );
}

export default Game;
