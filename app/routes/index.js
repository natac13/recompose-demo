import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/App/';

import withReducerClass from '../components/withReducer/classVersion';
import withReducerFunction from '../components/withReducer/functionalVersion';

export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="withReducerClass" component={withReducerClass} />
        <Route path="withReducerFunction" component={withReducerFunction} />
      </Route>
    </Router>
  );
}
