import React, { useContext, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from 'axios';

import imageError from '../../assets/imageError.png';

import Loader from '../../components/Loader';

import { Context } from '../../store';

import { Container } from './styles';

export default function Movie() {
  const [state, dispatch] = useContext(Context);

  const apiKey = process.env.REACT_APP_MOVIE_TOKEN;

  const { params } = useRouteMatch();

  useEffect(() => {
    api
      .get(`https://www.omdbapi.com/?i=${params.id}&apikey=${apiKey}`)
      .then((response) => {
        dispatch({ type: 'SET_SINGLE_MOVIE', payload: response.data });
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      });
  }, []);

  const handleAddFavoriteMovie = (movie) => {
    const newFavouriteList = [...state.favorites, movie];
    dispatch({ type: 'SET_FAVORITES', payload: newFavouriteList });

    localStorage.setItem('@Movie:Favorites', JSON.stringify(newFavouriteList));
  };

  return (
    <Container>
      <header>
        <Link to="/">
          <FaArrowLeft color="var(--white)" size={20} />
        </Link>
      </header>

      {state.loading ? (
        <Loader />
      ) : (
        <main>
          <section>
            <div>
              <h2>
                {state.singleMovie.Title === 'N/A'
                  ? 'No data available'
                  : state.singleMovie.Title}
              </h2>
              <span>
                <div>
                  <em>Duration</em>
                  <i>
                    {state.singleMovie.Runtime === 'N/A'
                      ? 'No data'
                      : state.singleMovie.Runtime}
                  </i>
                </div>
                <div>
                  <em>Year</em>
                  <i>
                    {state.singleMovie.Year === 'N/A'
                      ? 'No data'
                      : state.singleMovie.Year}
                  </i>
                </div>
                <div>
                  <em>IMDb Rating</em>
                  <i>
                    {state.singleMovie.imdbRating === 'N/A'
                      ? 'No data'
                      : state.singleMovie.imdbRating}
                  </i>
                </div>
              </span>
            </div>

            <button
              type="button"
              onClick={() => handleAddFavoriteMovie(state.singleMovie)}
            >
              <strong>Add to favourites</strong>
            </button>

            <div>
              <h4>Plot</h4>
              <p>
                {state.singleMovie.Plot === 'N/A'
                  ? 'No data available'
                  : state.singleMovie.Plot}
              </p>
            </div>

            <div>
              <h4>Awards</h4>
              <p>
                {state.singleMovie.Awards === 'N/A'
                  ? 'No data available'
                  : state.singleMovie.Awards}
              </p>
            </div>

            <div>
              <h4>Actors</h4>
              <p>
                {state.singleMovie.Actors === 'N/A'
                  ? 'No data available'
                  : state.singleMovie.Actors}
              </p>
            </div>

            <span>
              <div>
                <h4>Genre</h4>
                <p>
                  {state.singleMovie.Genre === 'N/A'
                    ? 'No data available'
                    : state.singleMovie.Genre}
                </p>
              </div>
              <div>
                <h4>Director</h4>
                <p>
                  {state.singleMovie.Director === 'N/A'
                    ? 'No data available'
                    : state.singleMovie.Director}
                </p>
              </div>
            </span>
          </section>

          <aside>
            <img
              src={state.singleMovie.Poster}
              alt={`${state.singleMovie.Title} Poster`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = imageError;
              }}
            />
          </aside>
        </main>
      )}
    </Container>
  );
}
