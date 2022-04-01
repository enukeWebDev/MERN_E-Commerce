import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../Store';

function PlaceOrderScreen() {
  const { state, dispatch: ctxDispatch } = useState(Store);
  const { cart, userInfo } = state;

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

      <Helmet>
        <title>Preview Order</title>
      </Helmet>

      <h1 className="my-3">Preview Order</h1>

      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                <strong>Address:</strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                {cart.shippingAddress.country}
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlaceOrderScreen;
