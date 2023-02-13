// import "./Shop.styles.scss";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../../routes/categories-preview/CategoriesPreview";
import Category from "../category/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
