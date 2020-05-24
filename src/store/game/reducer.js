import { INC_CLICKED, SET_SIZE, START_GAME, TOGGLE_PAUSE } from "./actions";

export const initialGameState = {
  clicked: 0,
  isStarted: false,
  isFinished: false,
  isPaused: false,
  size: 6
};

export default (state = initialGameState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isStarted: true
      };

    case TOGGLE_PAUSE:
      return {
        ...state,
        isPaused: !state.isPaused
      };

    case INC_CLICKED:
      return {
        ...state,
        clicked: state.clicked + 1
      };

    case SET_SIZE:
      return {
        ...state,
        size: action.payload
      };

    default:
      return state;
  }
};