import { connect } from "react-redux";

import { Board } from "./Board";

const mapStateToProps = (state) => ({
  isStarted: state.game.isStarted,
  table: state.board.table
});

export default connect(mapStateToProps)(Board);