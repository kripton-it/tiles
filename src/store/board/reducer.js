import { CREATE_BOARD, RESET_CURRENT, SET_CURRENT, SET_TIMER, UPDATE_CELL_STATE } from './actions';

import { getStartTable } from "../../utils";

export const initialBoardState = {
  current: null,
  timer: null,
  table: []
}

export default (state = initialBoardState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        table: getStartTable(action.payload)
      };

    case SET_TIMER:
      return {
        ...state,
        timer: action.payload
      }

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }

    case RESET_CURRENT:
      return {
        ...state,
        current: null
      }

    case UPDATE_CELL_STATE: {
      const { i, j } = action.payload.position;
      return {
        ...state,
        table: state.table.map((row, index1) => {
          return i !== index1 ? row : row.map((item, index2) => {
            return j !== index2 ? item : {
              ...item,
              state: action.payload.state
            }
          });
        })
      }
    }

    default:
      return state;
  }
}