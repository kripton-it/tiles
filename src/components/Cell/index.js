import { connect } from 'react-redux'

import Cell from './Cell'

import { incClicked, togglePause } from '../../store/game/actions'
import { setTimer, resetCurrent, setCurrent, updateCellState } from '../../store/board/actions'

const mapStateToProps = (state) => ({
  current: state.board.current,
  clicked: state.board.table.length,
  isPaused: state.game.isPaused,
  table: state.board.table,
  timer: state.board.timer
})

const mapDispatchToProps = (dispatch) => ({
  incClicked: () => dispatch(incClicked()),
  resetCurrent: () => dispatch(resetCurrent()),
  setCurrent: (position, value) => dispatch(setCurrent(position, value)),
  setTimer: (timerId) => dispatch(setTimer(timerId)),
  togglePause: () => dispatch(togglePause()),
  updateCellState: (position, state) => dispatch(updateCellState(position, state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)