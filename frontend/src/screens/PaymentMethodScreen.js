import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutSteps from '../components/CheckoutSteps';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PaymentMethodScreen() {
  const [paymentMethodName, setPaymentMethodName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>

        <h1 className="my-3">Payment Method</h1>

        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            ></Form.Check>
          </div>

          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            ></Form.Check>
          </div>

          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PaymentMethodScreen;
