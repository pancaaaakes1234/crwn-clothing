import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../form-input/FormInput";

import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";

import { ButtonsContainer, SignInContainer } from "./SignInForm.styles";

import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFeilds, setFormFeilds] = useState(defaultFormFields);
  const { email, password } = formFeilds;

  const signInwithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const resetFormFeilds = () => {
    setFormFeilds(defaultFormFields);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFeilds();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInwithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
