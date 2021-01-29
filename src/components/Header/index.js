import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import Container from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        <img src={logo} alt="Movie Logo" />
        <nav>
          <Link to="favorites" data-testid="favorites-page">
            My favorites
          </Link>
        </nav>
      </header>
    </Container>
  );
}
