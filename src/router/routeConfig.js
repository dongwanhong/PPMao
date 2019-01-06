import React from 'react';
import Home from '../views/home';
import Login from '../views/login';
import NotFound from '../components/pages/404';

const routeConfig = [{
  key: 'root',
  path: '/',
  exact: true,
  component: Home,
  // render: '',
  // getUserConfirmation: (msg, callback) => {},
  // hashType: '',
}, {
  key: 'login',
  path: '/login',
  exact: true,
  component: () => <Login typeCheck="checked success" />,
}, {
  key: 'notFound',
  exact: true,
  component: NotFound,
}];

export default routeConfig;
