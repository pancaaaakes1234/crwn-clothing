import { createSelector } from "reselect";
import { CategoriesState } from "./categories.reducer";
import { CategoriesMap } from "./categories.types";
import { RootState } from "../store";

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (selectCategoriesReducer) => selectCategoriesReducer.categoriesArray
);

export const categoriesSelector = createSelector(
  [selectCategories],
  (categories): CategoriesMap =>
    categories.reduce((acc, categories) => {
      const { title, items } = categories;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoriesMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (selectCategoriesReducer) => selectCategoriesReducer.isLoading
);
