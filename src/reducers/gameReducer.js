const cardPool = ['angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'];

const shuffle = array => array.sort(() => 0.5 - Math.random());

const getCard = (type, id) => ({
  type,
  id,
  flipped: Math.random() > 0.5,
  active: Math.random() > 0.5,
});

const duplicate = array => array.reduce((res, current) => res
  .concat([getCard(current, 'a'), getCard(current, 'b')]), []);

const deck = (size) => (
  shuffle(duplicate(cardPool.slice(0, size)))
);

const defaultStatue = {
  cards: [],
}

export default (state = defaultStatue, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "NEW_GAME":
      return Object.assign({}, state, {cards: deck(action.gameSize)});
    default:
      return state;
  }
}