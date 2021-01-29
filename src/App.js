import React from 'react';

import Store from './store';

import GlobalStyles from './styles/global';

import Routes from './routes';

function App() {
  return (
    <Store>
      <Routes />
      <GlobalStyles />
    </Store>
  );
}

export default App;
