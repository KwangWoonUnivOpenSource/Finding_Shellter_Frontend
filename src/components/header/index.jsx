import React from "react";
import style from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer'
import { RiAlarmWarningLine } from "react-icons/ri";
import { memo } from "react";
function Header(){
const navigate = useNavigate();
  return (
    <div>

      <Navbar  className = {style.nav}  data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/');}}><RiAlarmWarningLine/>Finding Shelter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={() => { navigate('/howtowar');}}>민방위 훈련 시 대피 요령</Nav.Link>
            <Nav.Link  onClick={() => { navigate('/howtogas');}}>화생방 발생 시 대피요령</Nav.Link>
            {/* <Nav.Link  onClick={() => { navigate('/howtoreport');}}>수상한 상황 발생 시 신고요령</Nav.Link>
            <Nav.Link  onClick={() => { navigate('/howtoprepare');}}>비상 시를 위해 비치할 물자들</Nav.Link> */}
            <Nav.Link  onClick={() => { navigate('/post');}}>빠르게 대피소 찾기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={style.bottom}/>
        <Outlet>
      </Outlet>
      <Footer/>
    </div>
  );
};

export default memo(Header);