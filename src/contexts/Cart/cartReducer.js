export const cartReducer = (state, action) => {
  let cart = null;
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload.item] };
    case "REMOVE_FROM_CART":
      cart = state.cart.filter(
        (item) => item.product._id !== action.payload.productId
      );
      return { ...state, cart };
    case "INCREMENT_QUANTITY":
      cart = state.cart.map((item) => {
        if (item.product._id === action.payload.productId)
          return { ...item, quantity: item.quantity + 1 };
        else return item;
      });
      return { ...state, cart };
    case "DECREMENT_QUANTITY":
      let decrementItem = state.cart.find(
        (item) => item.product._id === action.payload.productId
      );
      if (decrementItem.quantity === 1) {
        cart = state.cart.filter(
          (item) => item.product._id !== action.payload.productId
        );
        return { ...state, cart };
      }
      cart = state.cart.map((item) => {
        if (item.product._id === action.payload.productId && item.quantity > 0)
          return { ...item, quantity: item.quantity - 1 };
        else return item;
      });
      return { ...state, cart };
    default:
      return state;
  }
};
