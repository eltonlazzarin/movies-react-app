import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Movie from './pages/Movie';
import Favorites from './pages/Favorites';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/favorites" component={Favorites} />
    </BrowserRouter>
  );
}

export default Routes;
