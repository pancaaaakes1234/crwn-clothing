import "./Checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="head-block">
          <span>Product</span>
        </div>
        <div className="head-block">
          <span>Description</span>
        </div>
        <div className="head-block">
          <span>Quantity</span>
        </div>
        <div className="head-block">
          <span>Price</span>
        </div>
        <div className="head-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <span className="total">Total:${cartTotal}</span>
    </div>
  );
};

export default Checkout;
