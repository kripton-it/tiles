import React from "react";

export const Settings = ({ isStarted, size, setSize, startGame }) => {
  if (isStarted) return null;

  const selectLevel = (evt) => {
    console.log(evt.target.value);
    setSize(+evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    startGame();
  }

  const levels = [
    {
      level: 'Easy',
      size: 4
    },
    {
      level: 'Middle',
      size: 6
    },
    {
      level: 'Difficult',
      size: 8
    }
  ]

  return (
    <form onSubmit={handleSubmit}>
      <p>Please, select level:</p>
      {levels.map(item => (
        <div className="radio">
          <label>
            <input type="radio" value={item.size} checked={size === item.size} onChange={selectLevel} />
            {item.level}
          </label>
        </div>
      ))}
      <button type="submit">Start game</button>
    </form>
  );
}

