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

const calculateDeckStatus = cards => {
  const flippedCards = cards.filter(card => card.flipped && card.active);
  if(flippedCards.length !== 2) return cards;
  const match = flippedCards[0].type === flippedCards[1].type;
  if(match){
    return cards.map(card => Object.assign({}, card, { active:  !(!card.active || card.type === flippedCards[0].type) }));
  } else {
    return cards.map(card => Object.assign({}, card, { flipped: !card.active }));
  }
}

const defaultStatue = {
  cards: [],
}

export default (state = defaultStatue, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'NEW_GAME':
      return Object.assign({}, state, {cards: deck(action.gameSize)});
    case 'CARD_FLIP':
      return Object.assign({}, state, {cards: flipCard(state.cards, action)});
    case 'AFTER_FLIP_PING':
      return Object.assign({}, state, {cards: calculateDeckStatus(state.cards)})
    default:
      return state;
  }
}
