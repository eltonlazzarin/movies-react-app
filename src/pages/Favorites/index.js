import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import EmptyFavoritesMoviesList from '../../components/EmptyFavoritesMoviesList';

import { Container } from './styles';
import FavoritesMoviesList from '../../components/FavoritesMoviesList';

export default function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('@Movie:Favorites'));

  return (
    <Container>
      <header>
        <Link to="/">
          <FaArrowLeft color="var(--white)" size={20} onClick={() => {}} />
        </Link>
        <h1>Favorites</h1>
      </header>

      {favorites === null ? (
        <EmptyFavoritesMoviesList />
      ) : (
        <FavoritesMoviesList />
      )}
    </Container>
  );
}
