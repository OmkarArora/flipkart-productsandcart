export const cartReducer = (state, action) => {
  let cart = null;
  let savedForLater = null;
  let item = null;
  switch (action.type) {
    case "ADD_TO_CART":
      item = action.payload.item;
      if (state.savedForLater === undefined) savedForLater = [];
      else {
        savedForLater = state.savedForLater.filter(
          (savedItem) => savedItem.product._id !== item.product._id
        );
      }

      return {
        ...state,
        cart: [...state.cart, item],
        savedForLater,
      };
    case "REMOVE_FROM_CART":
      cart = state.cart.filter(
        (item) => item.product._id !== action.payload.productId
      );
      return { ...state, cart };
    case "SAVE_FOR_LATER":
      let saveItem = state.cart.find(
        (item) => item.product._id === action.payload.productId
      );
      cart = state.cart.filter(
        (item) => item.product._id !== saveItem.product._id
      );
      savedForLater = [...state.savedForLater];
      if (
        !state.savedForLater.find(
          (item) => item.product._id === saveItem.product._id
        )
      ) {
        savedForLater = [...savedForLater, saveItem];
      }
      return { ...state, cart, savedForLater };
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
