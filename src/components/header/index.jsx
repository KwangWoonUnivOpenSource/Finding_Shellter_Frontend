import React from "react";
import style from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
 function Header(){

  return (
    <div>

      <Navbar  className = {style.nav} bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Finding Shelter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">민방위 훈련 시 대피 요령</Nav.Link>
            <Nav.Link href="#features">지진 발생 시 대피요령</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Outlet>
          
      </Outlet>
    </div>
  );
};

export default Header;