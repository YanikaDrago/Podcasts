import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/dragomir_logo.svg';
import "./header.style.css"

const Header = () => {
    return (
        <div className="header-div">
            <Link to="/">
                <Logo className="logo-container"/>
            </Link>
            <Link to="admin">
                <p className="admin">For admin</p>
            </Link>
            
        </div>
    )
}

export default Header;