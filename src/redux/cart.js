const cart = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  let index = state?.findIndex((item) => item.id === action?.payload?.id);
  switch (action.type) {
    case "ADD_TO_CART":
      if (index < 0) {
        state = [...state, { ...action.payload, quantity: 1 }];
      } else {
        state = state.filter((item) => item.id !== action.payload.id);
      }
      saveStoreage(state);
      return state;
    case "INC_CART":
      state = state?.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveStoreage(state);
      return state;
    case "DEC_CART":
      state = state?.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      saveStoreage(state);
      return state;
    case "REMOVE_CART":
      state = state.filter((item) => item.id !== action.payload.id);
      saveStoreage(state);
      return state;
    case "REMOVE_ALL":
      state = [];
      saveStoreage(state);
      return state;
    default:
      return state;
  }
};
function saveStoreage(data) {
  localStorage.setItem("cart", JSON.stringify(data));
}
export default cart;
