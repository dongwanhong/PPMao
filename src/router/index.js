import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

function RouterProvider() {
  return (
    <HashRouter basename="">
      <Switch>
        {routes.map(route => <Route {...route} />)}
      </Switch>
    </HashRouter>
  );
}

export default RouterProvider;
