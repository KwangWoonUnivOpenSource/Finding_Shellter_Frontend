import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav(){
    return (
        <div className="navbar">
            <Link className="navbarMenu" to={'/'}>main</Link>
            <Link className="navbarMenu" to= {'/shellter'}>shellter</Link>
        </div>
    )
}