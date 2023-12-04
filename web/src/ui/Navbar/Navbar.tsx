"use client";

import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

interface ILNC {
  size: false | "sm" | "md" | "lg" | "xl" | "xxl";
  background:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | "link";
  title: string;
}

export const LandingNavbarComponent = ({ title, size, background }: ILNC) => {
  return (
    <Navbar
      expand={size}
      bg={background}
      data-bs-theme="dark"
      sticky="top"
      className="mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-size-${size}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-size-${size}`}
          aria-labelledby={`offcanvasNavbarLabel-size-${size}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-size-${size}`}>
              {title}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href={"/#"}>Home</Nav.Link>
              <Nav.Link href={"/#pricing"}>Pricing</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
