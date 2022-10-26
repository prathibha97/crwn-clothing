import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './category.action';
import { CATEGORY_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(
      getCategoriesAndDocuments,
      'categories'
    );
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (err) {
    yield* put(fetchCategoriesFailed(err as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
