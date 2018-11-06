import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
