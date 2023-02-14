import { ItemDetails, CartItemContainer, Name, Price } from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
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

export default CartItem;
