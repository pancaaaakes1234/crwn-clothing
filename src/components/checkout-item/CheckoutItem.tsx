import { memo } from "react";
import {
  ImageContainer,
  CheckoutItemContainer,
  RemoveButton,
  Name,
  Price,
  Quantity,
  Value,
  Arrow,
} from "./CheckoutItem.styles";

import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItemProps } from "../cart-item/CartItem";

const CheckoutItem = ({ cartItem }: CartItemProps) => {
  const { imageUrl, name, quantity, price } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addItemhandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default memo(CheckoutItem);
