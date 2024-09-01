const counter = (state = 9, action) => {
  switch (action.type) {
    case "INC":
      return (state = state + 1);
    case "DEC":
      return (state = state - 1);
    default:
      return state;
  }
};
export default counter;
