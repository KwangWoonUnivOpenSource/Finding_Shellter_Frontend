import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

export default function Nav(){
    return (
        <div className = {style.navbar}>
            <Link className={style.navbarMenu} to={'/'}>main</Link>
            <Link className= {style.navbarMenu} to= {'/shellter'}>shellter</Link>
        </div>
    )
}