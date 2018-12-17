import React from 'react';
import './Game.css';
import Card from './Card'

const getCards = size => Array(size).fill(1)
  .map(e => 
  <Card />
);

const Game = ({ size }) => (
  <div className="Game">
    {getCards(size)}
  </div>
);

export default Game;