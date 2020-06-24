import React from 'react';
import { render } from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/styles-global.scss';

import App from './app';

const ROOT = document.querySelector('[data-js="root"]');

render(<App />, ROOT);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./app', render);
}
