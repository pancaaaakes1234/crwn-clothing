import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";

import { BUTTON_TYPES_CLASSES } from "../button/Button";
import {
  PaymentFormContainer,
  FromContainer,
  PaymentButton,
} from "./PaymentForm.styles";

const isValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, SetIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    SetIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!isValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    SetIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FromContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPES_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay now
        </PaymentButton>
      </FromContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
