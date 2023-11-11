import React from "react";
import style from "./Footer.module.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer(){
    return (
        <div className={style.footer}>
            <Row>
                <Col>프로젝트명</Col>
            </Row>
            <div className ={style.footerInfo}>
            <Row>
                <Col>강지훈 조천산</Col>
                <Col>정 현 최윤호</Col>
            </Row>

            </div>
            
        </div>
    )
}