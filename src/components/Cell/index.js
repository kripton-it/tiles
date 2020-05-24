import { connect } from "react-redux";

import { Cell } from "./Cell";

import { handleClick } from "../../store/board/actions";

const mapStateToProps = (state) => ({
  isPaused: state.game.isPaused,
  table: state.board.table
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (position) => dispatch(handleClick(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);