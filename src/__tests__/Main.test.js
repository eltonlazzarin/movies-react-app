/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';

import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';

import Main from '../App';

describe('Empty movies list', () => {
  test('Should be able to render empty movies', () => {
    render(<Main />);

    const linkElement = screen.getByText(/No movies to sh/i);

    expect(linkElement).toBeInTheDocument();
  });
});

describe('Empty input form test', () => {
  it('should be able to validate if input is empty', () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId('input-search')).toBeEmptyDOMElement();
  });
});

describe('Filled input form test', () => {
  it('should be able to validate if input is receiving values', () => {
    const { getByTestId, getByPlaceholderText } = render(<Main />);

    act(() => {
      fireEvent.change(getByPlaceholderText('Search movies...'), {
        target: { value: 'spider' },
      });

      fireEvent.submit(getByTestId('input-search'));
    });

    expect(getByTestId('input-search')).toHaveValue();
  });
});

describe('Favorite movies', () => {
  it('should be able to navigate to favorites movies page', () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Main />
      </Router>
    );

    const link = getByTestId('favorites-page');
    expect(link).toBeInTheDocument();

    fireEvent.click(link);

    const text = screen.getByText('No favorites movies to show');

    expect(text).toBeInTheDocument();
  });
});
