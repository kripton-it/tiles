import { connect } from 'react-redux'

import { Settings } from './Settings'

import { createBoard } from '../../store/board/actions'
import { setSize, startGame } from '../../store/game/actions'

const mapStateToProps = (state) => ({
  isStarted: state.game.isStarted,
  size: state.game.size
})

const mapDispatchToProps = (dispatch) => ({
  createBoard: (size) => dispatch(createBoard(size)),
  setSize: (size) => dispatch(setSize(size)),
  startGame: () => dispatch(startGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)