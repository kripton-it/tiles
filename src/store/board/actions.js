import { togglePause } from "../game/actions";

export const CREATE_BOARD = "CREATE_BOARD";
export const UPDATE_CELL_STATE = "UPDATE_CELL_STATE";
export const SET_CURRENT = "SET_CURRENT";
export const RESET_CURRENT = "RESET_CURRENT";
export const SET_TIMER = "SET_TIMER";

export const createBoard = (size) => ({
  payload: size,
  type: CREATE_BOARD
});

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

export const handleClick = (position) => (dispatch, getState) => {
  const { current, table, timer } = getState().board;
  console.log(table);
  console.log(position);

  if (!current) {
    // first cell
    dispatch(updateCellState(position, "temp"));
    dispatch(setCurrent(position, table[position.i][position.j].value));
    const timerId = setTimeout(() => {
      dispatch(updateCellState(position, "closed"));
      dispatch(resetCurrent());
    }, 3000);
    dispatch(setTimer(timerId));
  } else if (current.value === table[position.i][position.j].value) {
    // guessed correct
    clearTimeout(timer);
    dispatch(updateCellState(current.position, "correct"));
    dispatch(updateCellState(position, "correct"));
    dispatch(resetCurrent());
    dispatch(setTimer(null));
  } else {
    // guessed wrong
    clearTimeout(timer);
    dispatch(updateCellState(current.position, "error"));
    dispatch(updateCellState(position, "error"));
    dispatch(togglePause());
    setTimeout(() => {
      dispatch(togglePause());
      dispatch(updateCellState(current.position, "closed"));
      dispatch(updateCellState(position, "closed"));
      dispatch(resetCurrent());
    }, 3000);
  }
}