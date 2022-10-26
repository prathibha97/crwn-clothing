import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase';
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSucess,
  signUpFailed,
} from './user.action';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly loading: boolean;
  readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (signOutSucess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
