import React, { useState } from "react";
import FormInput from "../form-input/FormInput";

import Button from "../button/Button";

import { SignUpContainer } from "./SignUpForm.styles";

import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
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
      dispatch(signUpStart(email, password, displayName));

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
    <SignUpContainer>
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
    </SignUpContainer>
  );
};

export default SignUpForm;
