import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/App/';

import withPropsClass from '../components/withProps/classVersion';
import withPropsFunction from '../components/withProps/functionalVersion';

export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="withPropsClass" component={withPropsClass} />
        <Route path="withPropsFunction" component={withPropsFunction} />
      </Route>
    </Router>
  );
}
