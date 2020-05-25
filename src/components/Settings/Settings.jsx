import React from "react";

import "./styles.css";

export const Settings = ({ createBoard, isStarted, setSize, size, startGame }) => {
  if (isStarted) return null;

  const selectLevel = (evt) => {
    setSize(+evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBoard(size);
    startGame();
  }

  const levels = [
    {
      level: "Easy",
      size: 4
    },
    {
      level: "Middle",
      size: 6
    },
    {
      level: "Difficult",
      size: 8
    }
  ];

  return (
    <form onSubmit={handleSubmit} className="settings">
      <p className="invite">Please, select level:</p>
      <div className="radios">
        {levels.map(item => (
          <div className="radio" key={item.size}>
            <label>
              <input type="radio" value={item.size} checked={size === item.size} onChange={selectLevel} />
              {item.level}
            </label>
          </div>
        ))}
      </div>
      <div className="start">
        <button type="submit" >Start game</button>
      </div>
    </form>
  );
}

