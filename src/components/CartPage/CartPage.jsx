import { useCart } from "../../contexts";
import { CartProduct } from "./CartProduct/CartProduct";
export const CartPage = () => {
  const { cart } = useCart();
  return (
    <div className="page page-cart">
      <div className="container-cartTotals">cart totals</div>
      <div className="container-cartProducts">
        {cart &&
          cart.length > 0 &&
          cart.map((item) => (
            <CartProduct key={item.product._id} cartItem={item} />
          ))}
      </div>
    </div>
  );
};
