import { connect } from 'react-redux';
import Game from './Game';

const mapStateToProps = state => ({
  cards: state.gameReducer.cards,
});

export default connect(mapStateToProps)(Game);
