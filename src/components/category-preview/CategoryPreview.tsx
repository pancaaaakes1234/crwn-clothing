import { Link } from "react-router-dom";
import { CategoriesItem } from "../../store/categories/categories.types";
import ProductCard from "../product-card/ProductCard";
import { CategoryPreviewContainer, Preview } from "./CategoryPreview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoriesItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title} className="title">
          {title.toLocaleUpperCase()}
        </Link>
      </h2>
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
