import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './app/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
