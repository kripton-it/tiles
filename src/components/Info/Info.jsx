import React from "react";
// import "./styles.css";

export const Info = ({ isFinished, points }) => {
  if (isFinished) {
    return (
      <div>Congratulations! Game over!</div>
    )
  }
  
  return (
    <div>
      <h1>Информация о ходе игры</h1>
      <p>Правильных ответов: {points}</p>
    </div>
  );
}
