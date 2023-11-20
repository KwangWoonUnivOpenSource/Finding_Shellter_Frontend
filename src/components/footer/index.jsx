import React from "react";
import style from "./Footer.module.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router';
import { IoLogoGithub } from "react-icons/io";

export default function Footer(){
    const navigate = useNavigate();
    return (
        <div>
        <div className={style.wrap}>
        <div>
        <h3>오픈소스 소프트웨어 개발 8조</h3>
        <IoLogoGithub/>
        </div>
        <button className = {style.btn}onClick={() => { navigate('/howtowar')}}>민방위 훈련 시 대피 요령</button>
        <button className = {style.btn} onClick={() => { navigate('/howtogas');}}>화생방 발생 시 대피요령</button>
        <button className = {style.btn} onClick={() => { navigate('/howtoreport');}}>수상한 상황 발생 시 신고 요령</button>
        <button className = {style.btn} onClick={() => { navigate('/howtoprepare');}}>비상 시를 대피해 비치할 물자들</button>
        </div>
        </div>
        
    );
}