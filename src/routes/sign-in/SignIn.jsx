import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInwithGooglePopup,
  createUserDocumentFromAuth,
  signInwithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const useDocRef = await createUserDocumentFromAuth(auth.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    // const response = await signInwithGooglePopup();
    // console.log(response);
    const { user } = await signInwithGooglePopup();
    // console.log({user});
    const useDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}> sign in with google popup</button>
      {/* <button onClick={signInwithGoogleRedirect}>
        sign in with google redirect
      </button> */}
      <SignUpForm />
    </>
  );
};

export default SignIn;
