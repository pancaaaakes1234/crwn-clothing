import { memo } from "react";
import { ItemDetails, CartItemContainer, Name, Price } from "./CartItem.styles";
import { CartItem as CartItemDetails } from "../../store/cart/cart.types";

export type CartItemProps = {
  cartItem: CartItemDetails;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default memo(CartItem);
