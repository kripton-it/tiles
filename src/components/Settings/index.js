import { connect } from 'react-redux'

import { Settings } from './Settings'

import { startGame } from '../../store/game/actions'
import { setSize } from '../../store/size/actions'

const mapStateToProps = (state) => ({
  isStarted: state.game.isStarted,
  size: state.size.size
})

const mapDispatchToProps = (dispatch) => ({
  setSize: (size) => dispatch(setSize(size)),
  startGame: () => dispatch(startGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)