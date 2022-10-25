import { all, call, put, takeLatest } from 'redux-saga/effects'
import { createUserDocumentFromAuth, getCurrentUser } from '../../utils/firebase'
import { signInFailed, signInSuccess } from './user.action'
import { USER_ACTION_TYPES } from './user.types'

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (err) {
        yield put(signInFailed(err))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return
        yield call(getSnapshotFromUserAuth,userAuth)
    } catch (err) {
        yield put(signInFailed(err))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([call(onCheckUserSession)])
}