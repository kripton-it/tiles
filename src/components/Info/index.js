import { connect } from "react-redux";

import { Info } from "./Info";

import { restartGame } from "../../store/game/actions";

const mapStateToProps = (state) => ({
  isFinished: state.game.isFinished,
  points: state.game.points
});

const mapDispatchToProps = (dispatch) => ({
  restartGame: () => dispatch(restartGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);