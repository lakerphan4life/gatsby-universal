import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://www.instagram.com/crosscommerce.io/?hl=en">Instagram</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
