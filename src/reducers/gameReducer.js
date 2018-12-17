const cardPool = ['angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'];

const shuffle = array => array.sort(() => 0.5 - Math.random());

const getCard = (type, id) => ({
  type,
  id,
  flipped: false,
  active: true,
});

const duplicate = array => array.reduce((res, current) => res
  .concat([getCard(current, 'a'), getCard(current, 'b')]), []);

const deck = (size) => (
  shuffle(duplicate(cardPool.slice(0, size)))
);

const flipCard = (cards, action) => cards.map(card => {
  if(card.id === action.id && card.type === action.cardType){
    return Object.assign({}, card, {flipped: true});
  }

  return card;
})

const calculateDeckStatus = (cards, currentTries) => {
  const flippedCards = cards.filter(card => card.flipped && card.active);
  if(flippedCards.length !== 2) return { cards, currentTries };
  const match = flippedCards[0].type === flippedCards[1].type;
  if(match){
    return {
     cards: cards.map(card => Object.assign({}, card, { active:  !(!card.active || card.type === flippedCards[0].type) })),
     currentTries: currentTries + 1,
    };
  } else {
    return {
      cards: cards.map(card => Object.assign({}, card, { flipped: !card.active })),
      currentTries: currentTries + 1,
    };
  }
} 

const defaultStatue = {
  cards: [],
  sizeOptions: [3, 4, 5, 6, 7, 8, 9, 10],
  currentTries: 0,
  best: '-',
}

export default (state = defaultStatue, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'NEW_GAME':
      return Object.assign({}, state, {
        cards: deck(action.gameSize),
        currentTries: 0,
      });
    case 'CARD_FLIP':
      return Object.assign({}, state, { cards: flipCard(state.cards, action)} );
    case 'AFTER_FLIP_PING':
      return Object.assign({}, state, { ...calculateDeckStatus(state.cards, state.currentTries) });
    case 'GAME_END':
      const highScore = state.best === "-" || state.best > action.score
      return Object.assign({}, state, { best: highScore ? action.score : state.best});
    default:
      return state;
  }
}
