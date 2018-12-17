import React from 'react';
import { connect } from 'react-redux';
import { newGame } from './actions'
import './GameController.css';

const sizes = [3,4,5,6,7,8,9,10]

const getSizes = () => sizes
  .map(e => (
    <option value={e}>{e}</option>
  ));

const startNewGame = (e, dispatch) => {
  e.preventDefault();
  const size = parseInt(e.target.querySelector('.SizePicker').value);
  dispatch(newGame(size));
}

const GameController = ({ dispatch }) => (
  <form className="GameController" onSubmit={e => startNewGame(e, dispatch)}>
    <p>Deck size:</p>
    <select className="SizePicker">
      {getSizes()}
    </select>
    <button type="submit" className="NewGame">
      START NEW GAME
    </button>
  </form>
);

export default connect()(GameController);