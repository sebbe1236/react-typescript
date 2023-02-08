// @ts-nocheck
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useAuth } from "../../components/context/Context";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
      <h1>({totalUniqueItems})</h1>

      <Container>
        <Row sm={1} md={3} lg={6}>
          {items.map((item) => (
            <>
              <div key={item.id}>
                Quantity:{item.quantity}
                <h3>{item.title}</h3>
                <img src={item.image} className="w-50" alt="product image" />
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Remove one</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Add one more</button>
                <button onClick={() => removeItem(item.id)}>Remove from cart</button>
              </div>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Cart;
