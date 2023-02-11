import React from "react";
import {
  signInwithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    // const response = await signInwithGooglePopup();
    // console.log(response);
    const { user } = await signInwithGooglePopup();
    // console.log(user);
    const useDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}> sign in with google popup</button>
    </>
  );
};
