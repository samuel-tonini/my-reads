import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Library from './Library';
import Search from './Search';

const App = () => (
  <Fragment>
    <Route exact path="/" component={Library} />
    <Route exact path="/search" component={Search} />
  </Fragment>
);

export default App;
