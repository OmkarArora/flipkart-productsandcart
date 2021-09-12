import { useCart } from "../../contexts";
import { DiscountedPrice } from "../DiscountedPrice/DiscountedPrice";
import "./productCard.css";

export const ProductCard = ({ product }) => {
  let { _id, name, brand, price, images } = product;
  const { dispatch: cartDispatch, cart } = useCart();

  const addToCart = () => {
    let cartItem = {
      product: { ...product },
      quantity: 1,
    };
    cartDispatch({ type: "ADD_TO_CART", payload: { item: cartItem } });
  };

  const incrementQuantity = () => {
    cartDispatch({ type: "INCREMENT_QUANTITY", payload: { productId: _id } });
  };

  const decrementQuantity = () => {
    cartDispatch({ type: "DECREMENT_QUANTITY", payload: { productId: _id } });
  };

  const isPresentInCart = cart.find((item) => item.product._id === _id);

  return (
    <div className="card-product">
      <div className="container-product-img">
        <img src={images[0]} alt={name} />
      </div>
      <div className="product-details">
        <div className="brand-name text-grey weight500">{brand}</div>
        <div className="product-name">{name}</div>
        <DiscountedPrice
          currency={price.currency}
          price={price.amount}
          discount={price.discount}
        />
        <div className="container-buttons">
          {isPresentInCart ? (
            <>
              <button className="btn-quantity" onClick={decrementQuantity}>
                -
              </button>
              {isPresentInCart.quantity}
              <button className="btn-quantity" onClick={incrementQuantity}>
                +
              </button>
            </>
          ) : (
            <button onClick={addToCart}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};
