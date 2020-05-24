import { connect } from "react-redux";

import { Info } from "./Info";

// import { incClicked } from "../../store/game/actions";
// import { handleClick } from "../../store/board/actions";

const mapStateToProps = (state) => ({
  isFinished: state.game.isFinished,
  points: state.game.points
});

/* const mapDispatchToProps = (dispatch) => ({
  incClicked: () => dispatch(incClicked()),
  handleClick: (position) => dispatch(handleClick(position))
}); */

export default connect(mapStateToProps)(Info);