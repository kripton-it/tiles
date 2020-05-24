import { connect } from "react-redux";

import Cell from "./Cell";

import { incClicked } from "../../store/game/actions";
import { handleClick } from "../../store/board/actions";

const mapStateToProps = (state) => ({
  clicked: state.board.table.length,
  isPaused: state.game.isPaused,
  table: state.board.table
});

const mapDispatchToProps = (dispatch) => ({
  incClicked: () => dispatch(incClicked()),
  handleClick: (position) => dispatch(handleClick(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);