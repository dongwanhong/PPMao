import React from 'react';
import Home from '../views/home';
import Product from '../views/product';
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
  key: 'product',
  path: '/product',
  exact: true,
  component: () => <Product typeCheck="checked success" />,
}, {
  key: 'notFound',
  exact: true,
  component: NotFound,
}];

export default routeConfig;
