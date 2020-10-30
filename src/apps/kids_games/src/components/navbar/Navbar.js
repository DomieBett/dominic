import React from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import logo from './babyfunlogo.png';
import avatar from './happybaby.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo.png"></img>
                    </Link>
                </div>
                <ul className="links">
                    <li className="link">
                        <NavLink exact={true} activeClassName="active" to="/games">Games</NavLink>
                    </li>
                    <li className="link">
                        <NavLink exact={true} activeClassName="active" to="/songs">Songs</NavLink>
                    </li>
                </ul>

                <div className="avatar">
                    <img src={avatar} alt="happy baby"></img>
                </div>
            </div>
        )
    }
}

export default Navbar;