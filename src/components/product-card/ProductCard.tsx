import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
} from "./ProductCard.styles";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoriesItem } from "../../store/categories/categories.types";

export type ProductCardProps = {
  product: CategoriesItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
