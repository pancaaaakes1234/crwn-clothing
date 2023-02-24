import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";
import { AuthenticationContainer } from "./Authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
