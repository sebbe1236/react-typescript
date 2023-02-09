// @ts-nocheck
import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useAuth } from "../../components/context/Context";
import Heading from "../../components/layout/Heading";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  //https://stackoverflow.com/questions/71775787/i-would-like-to-pop-up-confirmation-message-before-deleting-the-data-react-and-d for å legge til slett message.

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
      <Heading className="text-center">Basket</Heading>
      <h1>({totalUniqueItems})</h1>

      <Container>
        <Row sm={1} md={3} lg={6}>
          {items.map((item) => (
            <Col key={item.title}>
              <h3>{item.title}</h3>
              <img src={item.image} className="w-50 w-100" alt="product image" />
              <div className="d-flex text-center">
                <Button variant="danger" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                  -
                </Button>
                <h3>Quantity:{item.quantity}</h3>
                <Button variant="success" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                  +
                </Button>
              </div>
              <div>
                <Button variant="danger" className="m-2" onClick={() => removeItem(item.id)}>
                  Remove from cart
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Cart;
