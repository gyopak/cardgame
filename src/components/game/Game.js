import React from 'react';
import Card from './Card'

const gridStyle = size => ({
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(size))}, auto)`
});

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
  <div style={gridStyle(cards.length)}>
    {getCards(cards)}
  </div>
);

export default Game;
