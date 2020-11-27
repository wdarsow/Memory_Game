import React from 'react';
import NavbarMessage from "../NavbarMessage";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Memory Game</a>
            </li>
            <li>
                <NavbarMessage score={props.score} topScore={props.topScore} />
            </li>
            <li>
                Current Score: {props.score} | Best Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Navbar;