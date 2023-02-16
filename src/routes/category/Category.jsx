import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  categoriesSelector,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoryTitle, CategoryContainer } from "./Category.styles";

import Spinner from "../../components/spinner/Spinner";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
