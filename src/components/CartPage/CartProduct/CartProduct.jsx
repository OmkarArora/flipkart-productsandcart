import { useCart } from "../../../contexts";
import { DiscountedPrice } from "../../DiscountedPrice/DiscountedPrice";
import "./cartProduct.css";

export const CartProduct = ({ cartItem }) => {
  const { quantity, product } = cartItem;
  const { _id, images, name, brand, price } = product;
  const { dispatch: cartDispatch } = useCart();

  const incrementQuantity = () => {
    cartDispatch({ type: "INCREMENT_QUANTITY", payload: { productId: _id } });
  };

  const decrementQuantity = () => {
    cartDispatch({ type: "DECREMENT_QUANTITY", payload: { productId: _id } });
  };

  const removeFromCart = () => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: { productId: _id } });
  };

  const saveForLater = () => {
    cartDispatch({ type: "SAVE_FOR_LATER", payload: { productId: _id } });
  };

  return (
    <div className="cart-product">
      <div className="details">
        <img src={images[0]} alt={name} />
        <div>
          <div>
            <span className="brand-name text-grey weight500">{brand}</span>
            <span className="product-nam">{name}</span>
          </div>

          <DiscountedPrice
            price={price.amount}
            discount={price.discount}
            currency={price.currency}
          />
          <div>
            <button className="btn-quantity" onClick={decrementQuantity}>
              -
            </button>
            {quantity}
            <button className="btn-quantity" onClick={incrementQuantity}>
              +
            </button>
          </div>
          <button onClick={removeFromCart}>Remove from cart</button>
          <button onClick={saveForLater}>Save for later</button>
        </div>
      </div>
    </div>
  );
};
