//@ts-nocheck
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import Context, { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [auth, setAuth] = useAuth();
  const { totalUniqueItems } = useCart();

  const navigate = useNavigate();

  function logout() {
    const confirmLogout = window.confirm("are you sure that you want to log out?");

    if (confirmLogout) {
      try {
        setAuth(null);
        navigate("/");
      } catch (error) {
        console.log("error");
      }
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav.Link href="/signup">
            <Button className="p-2 m-2">Sign up</Button>
          </Nav.Link>
          {auth ? (
            <>
              <Button onClick={logout} variant="danger">
                Log out
              </Button>
            </>
          ) : (
            <>
              <Nav.Link href="/login">
                <Button className="p-2 m-2" variant="success">
                  Sign in
                </Button>
              </Nav.Link>
            </>
          )}
          <Nav.Link href="/cart">
            {" "}
            <Button style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%,25%)",
                }}
              >
                {totalUniqueItems}
              </div>
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
