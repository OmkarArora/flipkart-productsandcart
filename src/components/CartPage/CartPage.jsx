import { useCart } from "../../contexts";
import { CartProduct } from "./CartProduct/CartProduct";
import "./cartPage.css";
import { getDiscountedPrice } from "../DiscountedPrice/DiscountedPrice";

export const CartPage = () => {
  const { cart, savedForLater } = useCart();
  const totalPrice = cart.reduce(
    (acc, curr) =>
      acc +
      getDiscountedPrice(
        curr.product.price.amount,
        curr.product.price.discount
      ) *
        curr.quantity,
    0
  );
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div className="page page-cart">
      <h2>My cart</h2>
      {cart && cart.length > 0 && (
        <div className="container-cartTotals">
          <h3>PRICE DETAILS</h3>
          <div>TOTAL ITEMS: {totalItems}</div>
          <div>
            PRICE: {cart[0].product.price.currency.symbol}
            {totalPrice}
          </div>
        </div>
      )}

      <div className="container-cartProducts">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <CartProduct key={item.product._id} cartItem={item} />
          ))
        ) : (
          <div>No products added to cart</div>
        )}
      </div>
      <div className="saved-for-later">
        <h2>Saved For Later</h2>
        {savedForLater &&
          savedForLater.length > 0 &&
          savedForLater.map((item) => <div>{item.product.name}</div>)}
      </div>
    </div>
  );
};
