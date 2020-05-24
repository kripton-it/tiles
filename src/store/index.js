import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import boardReducer, { initialBoardState } from "./board/reducer";
import gameReducer, { initialGameState } from "./game/reducer";

const rootReducer = combineReducers({
  board: boardReducer,
  game: gameReducer
});

const initialState = {
  board: initialBoardState,
  game: initialGameState
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);