import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (selectCategoriesReducer) => selectCategoriesReducer.categoriesArray
);

export const categoriesSelector = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, categories) => {
      const { title, items } = categories;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (selectCategoriesReducer) => selectCategoriesReducer.isLoading
);
