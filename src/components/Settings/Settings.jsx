import React from "react";

export const Settings = ({ createBoard, isStarted, setSize, size, startGame }) => {
  if (isStarted) return null;

  const selectLevel = (evt) => {
    // console.log(evt.target.value);
    // const size = +evt.target.value
    setSize(+evt.target.value);
    // createBoard(size);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBoard(size);
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
        <div className="radio" key={item.size}>
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

