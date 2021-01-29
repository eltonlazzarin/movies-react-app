import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container } from './styles';

export default function EmptyFavoritesMoviesList() {
  return (
    <Container>
      <span>
        <img src={logo} alt="Movie Logo" />
        <h4>No favorites movies to show</h4>
        <Link to="/">Search and favorite movies</Link>
      </span>
    </Container>
  );
}
