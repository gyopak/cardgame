const deck = (size) => (
  new Array(size * 2).fill(null)
);
  
const defaultStatue = {
  cards: [],
}
  
export default (state = defaultStatue, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "NEW_GAME":
      return Object.assign({}, state, { cards: deck(action.gameSize)} );
    default:
      return state;
  }
}