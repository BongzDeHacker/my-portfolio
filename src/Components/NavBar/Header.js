import React from 'react';
import './Header.css';
import mail from './image/icons8-email-30.png';
import Index from '../Home/Index';
import About from '../About/About';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="mailto:bongubuzwemafuya@gmail.com" target='blank' className="logo">
     <img src={mail} alt=''/> 
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a onClick={Index} href="Index">Home</a>
      </li>
      <li>
        <a onClick={About} href="About">About</a>
      </li>
      <li>
        <a href="/contact">Projects</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;