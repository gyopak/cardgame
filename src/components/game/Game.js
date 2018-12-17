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

const gameEndCheck = (cards, dispatch, currentTries) => {
  const isAnyCardAvailable = cards.some(card => card.active);
  if (cards.length && !isAnyCardAvailable) {
    dispatch({ type: "GAME_END", score: currentTries })
  }
}

const Game = ({ cards, currentTries, best, dispatch }) => {
  gameEndCheck(cards, dispatch, currentTries);
  return (
    <div className="Game">
      <div>
        <p>{`Current tries: ${currentTries}`}</p>
        <p>{`Best: ${best}`}</p>
      </div>
      <div style={gridStyle(cards.length)}>
      {getCards(cards)}
      </div>
    </div>
  );
}

export default Game;
