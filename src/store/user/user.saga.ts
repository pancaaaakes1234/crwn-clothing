import { call, all, takeLatest, put } from "typed-redux-saga/macro";
import { USER_CURRENT_TYPES } from "./user.types";
import { User } from "firebase/auth";

import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInwithGooglePopup,
  signInAuthWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInfo,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: AdditionalInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInwithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const UserCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (UserCredential) {
      const { user } = UserCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, addtionalDetails },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, addtionalDetails);
}

export function* SignOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_CURRENT_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_CURRENT_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield* takeLatest(USER_CURRENT_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_CURRENT_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_CURRENT_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_CURRENT_TYPES.SIGN_OUT_START, SignOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
