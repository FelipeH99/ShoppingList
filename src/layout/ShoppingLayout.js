import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import "./shoppingLayout.css";

export default function ShoppingLayout() {
  return (
    <div className="containerdos">
      <header className="header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Shopping List</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/categories">
                Categorias
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                Create
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
                Favoritos
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </div>
  );
}
