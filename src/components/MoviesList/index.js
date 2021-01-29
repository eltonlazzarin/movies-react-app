import React, { useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Context } from '../../store';

import imageError from '../../assets/imageError.png';

import EmptyMoviesList from '../EmptyMoviesList';

import { Container } from './styles';

export default function MoviesList() {
  const [state, dispatch] = useContext(Context);

  const handleAddFavoriteMovie = (movie) => {
    const newFavoriteList = [...state.favorites, movie];
    dispatch({ type: 'SET_FAVORITES', payload: newFavoriteList });

    localStorage.setItem('@Movie:Favorites', JSON.stringify(newFavoriteList));
  };

  return (
    <>
      {state.movies.length === 0 ? (
        <EmptyMoviesList />
      ) : (
        <Container>
          <main>
            {state.movies.map((movie) => (
              <article key={movie.imdbID}>
                <AiOutlineHeart
                  color="var(--white)"
                  size={28}
                  onClick={() => handleAddFavoriteMovie(movie)}
                />
                <Link to={`movie/${movie.imdbID}`}>
                  <figure>
                    <img
                      src={movie.Poster}
                      alt={`${movie.Title} Poster`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = imageError;
                      }}
                    />
                  </figure>
                </Link>

                <footer>
                  <p>
                    {movie.Title === 'N/A' ? 'No data available' : movie.Title}
                  </p>
                  <p>
                    {movie.Year === 'N/A' ? 'No data available' : movie.Year}
                  </p>
                </footer>
              </article>
            ))}
          </main>
        </Container>
      )}
    </>
  );
}
