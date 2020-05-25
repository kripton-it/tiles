import { ADD_POINTS, FINISH_GAME, RESTART_GAME, SET_SIZE, START_GAME, TOGGLE_PAUSE } from "./actions";

export const initialGameState = {
  isStarted: false,
  isFinished: false,
  isPaused: false,
  size: 6,
  points: 0
};

export default (state = initialGameState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      return {
        ...state,
        points: state.points + 1
      };

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

    case SET_SIZE:
      return {
        ...state,
        size: action.payload
      };

    case FINISH_GAME:
      return {
        ...state,
        isFinished: true
      };

    case RESTART_GAME:
      return initialGameState;

    default:
      return state;
  }
};