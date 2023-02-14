import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ItemCount, ShoppingIcon, CartIconContained } from "./CartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOPen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOPen(!isCartOpen);
  return (
    <CartIconContained onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContained>
  );
};

export default CartIcon;
