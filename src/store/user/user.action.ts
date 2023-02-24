import { USER_CURRENT_TYPES } from "./user.types";
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { UserData, AdditionalInfo } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type CheckUserSession = Action<USER_CURRENT_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<
  USER_CURRENT_TYPES.SET_CURRENT_USER,
  UserData
>;

export type GoogleSignInStart = Action<USER_CURRENT_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_CURRENT_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_CURRENT_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_CURRENT_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_CURRENT_TYPES.SIGN_UP_START,
  {
    email: string;
    password: string;
    displayName: string;
  }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_CURRENT_TYPES.SIGN_UP_SUCCESS,
  { user: User; addtionalDetails: AdditionalInfo }
>;

export type SignUpFailed = ActionWithPayload<
  USER_CURRENT_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_CURRENT_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_CURRENT_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_CURRENT_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_CURRENT_TYPES.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_CURRENT_TYPES.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_CURRENT_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_CURRENT_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_CURRENT_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_CURRENT_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_CURRENT_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, addtionalDetails: AdditionalInfo): SignUpSuccess =>
    createAction(USER_CURRENT_TYPES.SIGN_UP_SUCCESS, { user, addtionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_CURRENT_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_CURRENT_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_CURRENT_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_CURRENT_TYPES.SIGN_OUT_FAILED, error)
);
