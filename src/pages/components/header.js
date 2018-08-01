import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => (
  <header className="Header">
    <img src={logo} width={250}/>

    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/videos">
            Videos
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
