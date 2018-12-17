import { connect } from 'react-redux';
import Game from './Game';

const mapStateToProps = state => ({ ...state.gameReducer });

export default connect(mapStateToProps)(Game);
