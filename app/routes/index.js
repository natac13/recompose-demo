import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/App/';

import withReducerClass from '../components/withReducer/classVersion';
import withReducerFunction from '../components/withReducer/functionalVersion';

import withPropsClass from '../components/withProps/class';
import withPropsFunctional from '../components/withProps/functional';

import lifecycleClass from '../components/lifecycle/class';
import lifecycleFuncitonal from '../components/lifecycle/functional';

export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="withReducerClass" component={withReducerClass} />
        <Route path="withReducerFunction" component={withReducerFunction} />

        <Route path="withPropsClass" component={withPropsClass} />
        <Route path="withPropsFunctional" component={withPropsFunctional} />

        <Route path="lifecycleClass" component={lifecycleClass} />
        <Route path="lifecycleFuncitonal" component={lifecycleFuncitonal} />
      </Route>
    </Router>
  );
}
