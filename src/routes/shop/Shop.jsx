import { useContext } from "react";
import "./Shop.styles.scss";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductContext } from "../../contexts/products.context";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
