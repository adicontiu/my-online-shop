import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
  console.log(token);
  alert("Payment successful");
};

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const apiKey = "pk_test_oQavNjB15iOaoqjsznM0hYTv003a59km4C";

  return <StripeCheckout
      name="My Online Shop" // the pop-in header title
      label="Pay Now"
      image="https://svgshare.com/i/CUz.svg"
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={apiKey}
  />
};

export default StripeCheckoutButton;