import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  Head,
  Total,
} from "./Checkout.styles";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <Head>
          <span>Product</span>
        </Head>
        <Head>
          <span>Description</span>
        </Head>
        <div>
          <span>Quantity</span>
        </div>
        <Head>
          <span>Price</span>
        </Head>
        <Head>
          <span>Remove</span>
        </Head>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <Total>Total:${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
