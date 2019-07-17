import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navi = () => {
    return (
        <nav> 
            <h1> Welcome to Solutions Tech Inc! </h1>
            <div className="linkz">
                <Link to="/"> Home </Link>
                <Link to="/About"> About </Link>
                <Link to="/Contact"> Contact </Link>
                <Link to="/Careers"> Careers </Link> 
            </div>
        </nav>
    )
}

export default Navi; 
