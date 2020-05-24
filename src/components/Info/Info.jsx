import React from "react";
// import "./styles.css";

export const Info = ({ isFinished, points, restartGame }) => {
  if (isFinished) {
    return (
      <div>
        <h1>Congratulations! Game over!</h1>
        <button type="button" onClick={restartGame}>New game</button>
      </div>
    )
  }
  
  return (
    <div>
      <h1>Game info</h1>
      <p>Correct answers: {points}</p>
    </div>
  );
}
