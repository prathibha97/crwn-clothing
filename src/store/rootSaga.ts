import { all, call } from 'typed-redux-saga/macro';
import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './users/user.saga';

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
