export const START_GAME = "START_GAME";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";
export const INC_CLICKED = "INC_CLICKED";
export const SET_SIZE = "SET_SIZE";

export const startGame = () => ({
  type: START_GAME
});

export const togglePause = () => ({
  type: TOGGLE_PAUSE
});

export const incClicked = () => ({
  type: INC_CLICKED
});

export const setSize = (size) => ({
  payload: size,
  type: SET_SIZE
});