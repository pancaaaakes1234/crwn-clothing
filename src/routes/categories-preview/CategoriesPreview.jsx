import { useSelector } from "react-redux";
import {
  categoriesSelector,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

import Spinner from "../../components/spinner/Spinner";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
