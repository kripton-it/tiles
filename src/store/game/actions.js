export const START_GAME = "START_GAME";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";
export const SET_SIZE = "SET_SIZE";
export const ADD_POINTS = "ADD_POINTS";
export const FINISH_GAME = "FINISH_GAME";
export const RESTART_GAME = "RESTART_GAME";

export const startGame = () => ({
  type: START_GAME
});

export const togglePause = () => ({
  type: TOGGLE_PAUSE
});

export const setSize = (size) => ({
  payload: size,
  type: SET_SIZE
});

export const addPoints = () => ({
  type: ADD_POINTS
});

export const finishGame = () => ({
  type: FINISH_GAME
});

export const restartGame = () => ({
  type: RESTART_GAME
});