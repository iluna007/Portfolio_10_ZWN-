import React, { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/zwnlogo.svg";
import BagOffcanvas from "./BagOffcanvas";

const Navbar = ({
  bag,
  wishlist,
  addToBag,
  removeFromBag,
  increaseQuantity,
  decreaseQuantity,
  clearBag,
  isEmpty,
  bagTotal
}) => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleClose = () => setShowOffCanvas(false);
  const handleShow = () => setShowOffCanvas(true);

  return (
    <BootstrapNavbar
      bg="light"
      expand="lg"
      className="bg-body-tertiary"
      collapseOnSelect
    >
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img
            src={logo}
            alt="Zero Waste Logo"
            style={{ width: "200px", height: "auto" }}
            className="me-2"
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbarNavAltMarkup" />
        <BootstrapNavbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ms-auto example">
            <Nav.Item>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/product-list">
                Products
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/wishlist">
                <i className="bi bi-bookmark-heart"></i> ({wishlist.length})
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" onClick={handleShow}>
                <i className="bi bi-bag"></i> (
                {bag.reduce((acc, item) => acc + item.quantity, 0)})
              </Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>

      {/* Use BagOffcanvas Component */}
      <BagOffcanvas
        show={showOffCanvas}
        handleClose={handleClose}
        bag={bag}
        removeFromBag={removeFromBag}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearBag={clearBag}
        isEmpty={isEmpty}
        bagTotal={bagTotal}
      />
    </BootstrapNavbar>
  );
};

export default Navbar;
