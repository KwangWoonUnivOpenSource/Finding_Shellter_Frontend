import React from "react";
import "./Footer.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer(){
    return (
        <div className="footer">
            <Row>
                <Col>프로젝트명</Col>
            </Row>
            <div className="footerInfo">
            <Row>
                <Col>강지훈 조천산</Col>
              
                <Col>정 현 최윤호</Col>
            </Row>

            </div>
            
        </div>
    )
}