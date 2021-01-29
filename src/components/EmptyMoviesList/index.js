import React from 'react';

import logo from '../../assets/logo.png';

import { Container } from './styles';

export default function EmptyMoviesList() {
  return (
    <Container>
      <span>
        <img src={logo} alt="Movie logo" />
        <h4>No movies to show</h4>
        <p>Search for a movie above</p>
      </span>
    </Container>
  );
}
