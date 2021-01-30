import React, { useEffect, useContext } from 'react';
import api from 'axios';

import { Context } from '../../store';

import Input from '../../components/Input/styles';
import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';

import { Container } from './styles';

export default function Main() {
  const [state, dispatch] = useContext(Context);

  const apiKey = process.env.REACT_APP_MOVIE_TOKEN;

  const handleFetchData = async (event) => {
    event.preventDefault();

    try {
      await api
        .get(`http://www.omdbapi.com/?s=${state.search}&apikey=${apiKey}`)
        .then((response) => {
          dispatch({ type: 'SET_MOVIES', payload: response.data.Search });
          dispatch({ type: 'SET_IS_LOADING', payload: true });
        });

      localStorage.setItem('@Movie:Search', state.search);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    const search = localStorage.getItem('@Movie:Search');

    if (search) {
      api
        .get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`)
        .then((response) => {
          dispatch({ type: 'SET_MOVIES', payload: response.data.Search });
        });

      dispatch({ type: 'SET_IS_LOADING', payload: false });
    }

    localStorage.removeItem('@Movie:Search');
  }, []);

  if (state.movies === undefined) {
    // eslint-disable-next-line no-alert
    alert('Too many results. Please refine your search.');
    window.location.reload(false);
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleFetchData}>
          <Input
            placeholder="Search movies..."
            value={state.search}
            onChange={(event) =>
              dispatch({
                type: 'SET_SEARCH_MOVIE',
                payload: event.target.value,
              })
            }
            data-testid="input-search"
          />
        </form>

        <MoviesList />
      </Container>
    </>
  );
}
