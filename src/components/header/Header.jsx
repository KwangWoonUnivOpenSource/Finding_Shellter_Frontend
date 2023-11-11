import React from "react";
import style from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 function Header(){

  return (
    <>
      <Navbar  className = {style.nav} bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Finding Shelter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
    //    <div className = {style.header}>
    //         <h2>Finding Shelter</h2>
    //    </div>

export default Header;