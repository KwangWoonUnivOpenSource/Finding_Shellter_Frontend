import React from "react";
import style from "./Footer.module.css"
import { useNavigate } from 'react-router';
import { IoLogoGithub } from "react-icons/io";
import { memo } from "react";
 function Footer(){
    const navigate = useNavigate();
    return (
        
        <div className={style.wrap}>
        <div>
        <h3>오픈소스 소프트웨어 개발 8조</h3>
        <IoLogoGithub/>
        <a href="https://github.com/KwangWoonUnivOpenSource">https://github.com/KwangWoonUnivOpenSource</a>
        </div>
        <button className = {style.btn} onClick={() => { navigate('/howtowar')}}>민방위 훈련 시 대피 요령</button>
        <button className = {style.btn} onClick={() => { navigate('/howtogas');}}>화생방 발생 시 대피요령</button>
        <button className = {style.btn} onClick={() => { navigate('/howtoreport');}}>수상한 상황 발생 시 신고 요령</button>
        <button className = {style.btn} onClick={() => { navigate('/howtoprepare');}}>비상 시를 대피해 비치할 물자들</button>
        <div className={style.src}>
        <p>데이터 출처</p>
        <p>공공 데이터 포털</p>
        <p>영등포 구청</p>
        </div>
        </div>
        
        
    );
}
export default memo(Footer)