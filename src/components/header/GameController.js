import React from 'react';
import './GameController.css';

const sizes = [3,4,5,6,7,8,9,10]

const getSizes = () => sizes
  .map(e => (
    <option value={e}>{e}</option>
  ));

const GameController = () => (
  <div className="GameController">
    <p>Deck size:</p>
    <select className="SizePicker">
      {getSizes()}
    </select>
    <button className="NewGame">
      START NEW GAME
    </button>
  </div>
);

export default GameController;
