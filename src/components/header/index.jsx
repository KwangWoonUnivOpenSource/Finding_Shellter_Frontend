import React from "react";
import style from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";

 function Header(){
const navigate = useNavigate();
  return (
    <div>

      <Navbar  className = {style.nav} bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/');}}>Finding Shelter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={() => { navigate('/howtoresque');}}>민방위 훈련 시 대피 요령</Nav.Link>
            <Nav.Link  onClick={() => { navigate('/earthquake');}}>지진 발생 시 대피요령</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Outlet>
        <Footer/>
      </Outlet>
    </div>
  );
};

export default Header;