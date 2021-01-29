import React, { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import imageError from '../../assets/imageError.png';

import { Context } from '../../store';

import EmptyFavoritesMoviesList from '../EmptyFavoritesMoviesList';

import { Container } from './styles';

export default function FavoritesMoviesList() {
  const [state, dispatch] = useContext(Context);

  const favorites = JSON.parse(localStorage.getItem('@Movie:Favorites'));

  const removeFavouriteMovie = (movie) => {
    const newFavoriteList = state.favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    dispatch({ type: 'SET_FAVORITES', payload: newFavoriteList });

    localStorage.setItem('@Movie:Favorites', JSON.stringify(newFavoriteList));
  };

  return (
    <Container>
      {favorites.length === 0 ? (
        <EmptyFavoritesMoviesList />
      ) : (
        <main>
          {favorites.map((favorite) => (
            <article key={favorite.imdbID}>
              <AiFillHeart
                color="var(--white)"
                size={28}
                onClick={() => removeFavouriteMovie(favorite)}
              />

              <Link to={`movie/${favorite.imdbID}`}>
                <figure>
                  <img
                    src={favorite.Poster}
                    alt={`${favorite.Title} Poster`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = imageError;
                    }}
                  />
                </figure>
              </Link>

              <footer>
                <p>
                  {favorite.Title === 'N/A'
                    ? 'No data available'
                    : favorite.Title}
                </p>
                <p>
                  {favorite.Year === 'N/A'
                    ? 'No data available'
                    : favorite.Year}
                </p>
              </footer>
            </article>
          ))}
        </main>
      )}
    </Container>
  );
}
