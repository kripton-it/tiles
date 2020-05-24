import { connect } from 'react-redux'

import { Board } from './Board'

/* import { startGame } from '../../store/game/actions'
import { setSize } from '../../store/size/actions' */

const mapStateToProps = (state) => ({
  isStarted: state.game.isStarted,
  table: state.board.table
})

/* const mapDispatchToProps = (dispatch) => ({
  setSize: (size) => dispatch(setSize(size)),
  startGame: () => dispatch(startGame())
}) */

export default connect(mapStateToProps)(Board)