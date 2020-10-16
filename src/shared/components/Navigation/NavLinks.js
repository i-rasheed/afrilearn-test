import React from 'react';
import { Link } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <Link to="/" exact>Home</Link>
    </li>
    <li>
      <Link to="/u1">About Us</Link>
    </li>
    <li>
      <Link to="/new">Courses</Link>
    </li>
    <li>
      <Link to="/auth">Teacher</Link>
    </li>
    <li>
      <Link to="/auth">Student Profile</Link>
    </li>
    <li>
      <Link to="/auth">Pricing</Link>
    </li>
    <li>
      <Link to="/auth">Contact</Link>
    </li>
  </ul>
};

export default NavLinks;