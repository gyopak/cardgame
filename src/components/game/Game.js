import React from 'react';
import './Game.css';
import Card from './Card'

const getCards = cards => cards
  .map(e => 
  <Card 
    type={e.type}
    key={`${e.type}_${e.id}`}
    id={e.id}
    flipped={e.flipped}
    active={e.active}
  />
);

const Game = ({ cards }) => (
  <div className="Game">
    {getCards(cards)}
  </div>
);

export default Game;
