import React from 'react';
import { connect } from 'react-redux';
import { newGame } from './actions'
import './GameController.css';

const getSizes = sizes => sizes
  .map(e => (
    <option key={e} value={e}>{e}</option>
  ));

const startNewGame = (e, dispatch) => {
  e.preventDefault();
  const size = parseInt(e.target.querySelector('.SizePicker').value);
  dispatch(newGame(size));
}

const GameController = ({ sizeOptions, dispatch }) => (
  <form className="GameController" onSubmit={e => startNewGame(e, dispatch)}>
    <p>Deck size:</p>
    <select className="SizePicker">
      {getSizes(sizeOptions)}
    </select>
    <button type="submit" className="NewGame">
      START NEW GAME
    </button>
  </form>
);

const mapStateToProps = state => {
  console.log("mapstate", state);
  return {
    sizeOptions: state.gameReducer.sizeOptions,
  }
};

export default connect(mapStateToProps)(GameController);
