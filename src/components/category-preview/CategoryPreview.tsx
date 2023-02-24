import { Link } from "react-router-dom";
import { CategoriesItem } from "../../store/categories/categories.types";
import ProductCard from "../product-card/ProductCard";
import {
  CategoryPreviewContainer,
  Preview,
  TitleContainer,
} from "./CategoryPreview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoriesItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <Link to={title}>{title.toLocaleUpperCase()}</Link>
      </TitleContainer>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
