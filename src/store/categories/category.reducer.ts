import { AnyAction } from 'redux';
import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from './category.action';
import { Category } from './category.types';

export type CategoriesState = {
  readonly categories: Category[];
  readonly loading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, loading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, loading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};
