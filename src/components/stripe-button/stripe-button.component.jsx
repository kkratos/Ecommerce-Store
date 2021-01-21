import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pushibleableKey =
    "pk_test_51IAFJNKdEIemuWgkeRsQBmsJdtQMKwmSAaKsmLvdqHM7eKFjkKZFfqkF5YrVMxSNjqoyv4qoEe9SafzZUm8bKM9i00EyKJbqWu";

  const onToken = (token) => {
    console.log(token);
    alert("payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Julies Clothing Pvt Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pushibleableKey}
    />
  );
};

export default StripeCheckoutButton;
