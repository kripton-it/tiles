export const CREATE_BOARD = 'CREATE_BOARD';
/* export const OPEN_TEMP_CELL = 'OPEN_TEMP_CELL';
export const CLOSE_CELL = 'CLOSE_CELL'; */
export const UPDATE_CELL_STATE = 'UPDATE_CELL_STATE';
export const SET_CURRENT = 'SET_CURRENT';
export const RESET_CURRENT = 'RESET_CURRENT';
export const SET_TIMER = 'SET_TIMER';

export const createBoard = (size) => ({
  payload: size,
  type: CREATE_BOARD
});

/* export const openTempCell = (position) => ({
  payload: position,
  type: OPEN_TEMP_CELL
}); */

export const updateCellState = (position, state) => ({
  payload: {
    position,
    state
  },
  type: UPDATE_CELL_STATE
});

export const setCurrent = (position, value) => ({
  payload: { position, value },
  type: SET_CURRENT
});

export const resetCurrent = () => ({
  type: RESET_CURRENT
});

export const setTimer = (timerId) => ({
  payload: timerId,
  type: SET_TIMER
});