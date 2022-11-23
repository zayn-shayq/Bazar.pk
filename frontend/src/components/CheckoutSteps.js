import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps" data-testid = "checkingSteps">
      <Col className={props.step1 ? 'active' : ''}data-testid = "Sign In">Sign-In</Col>
      <Col className={props.step2 ? 'active' : ''}data-testid = "Shipping">Shipping</Col>
      <Col className={props.step3 ? 'active' : ''}data-testid = "Payment">Payment</Col>
      <Col className={props.step4 ? 'active' : ''}data-testid = "Place order">Place Order</Col>
    </Row>
  );
}