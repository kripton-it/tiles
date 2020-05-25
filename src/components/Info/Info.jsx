import React from "react";
import "./styles.css";

export const Info = ({ isFinished, isStarted, points, restartGame }) => {
  if (!isStarted) return null;
  if (isFinished) {
    return (
      <div className="report">
        <h1>
          Congratulations! Game over!
          <button type="button" onClick={restartGame} className="restart">New game</button>
        </h1>
      </div>
    )
  }
  
  return (
    <div className="info">
      <p>Correct answers: {points}</p>
    </div>
  );
}
