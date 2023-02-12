import { async } from "@firebase/util";
import React, { useState } from "react";
import FormInput from "../form-input/FormInput";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./SignUpForm.styles.scss";
import Button from "../button/Button";

const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = formFeilds;

  const resetFormFeilds = () => {
    setFormFeilds(defaultFromFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFeilds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Dispaly Name"
          required
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        ></FormInput>

        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        ></FormInput>

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
