/* 特殊页面的路由配置 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import NotFound from '../components/pages/404';

const routes = [{
  key: 'root',
  path: '/',
  exact: true,
  component: () => <Redirect to="/home" />,
  // render: '',
  // getUserConfirmation: (msg, callback) => {},
  // hashType: '',
}, {
  key: 'root',
  path: '/home',
  component: Home,
}, {
  key: 'login',
  path: '/login',
  exact: true,
  component: Login,
}, {
  key: 'notFound',
  exact: true,
  component: NotFound,
}];

export default routes;
