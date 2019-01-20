import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

/**
 * 判断用户是否拥有该页面的权限
 * @param {boolean} 访问该页面是否需要登录
 * @param {array} 能访问该页面需要的权限
 * @returns {string}
 */
function checkAuthority(requireLogin, requireAuthority = []) {
  const len = requireAuthority.length;
  const { token } = sessionStorage;
  const { userInfo } = localStorage;
  const { authority } = userInfo || { authority: '' };
  if (requireLogin && !token) {
    return 'requireLogin';
  }
  if (len && !requireAuthority.includes(authority)) {
    return 'requireAuthority';
  }
  return 'pass';
}

/**
 * 根据用户拥有的权限决定路由跳转目的页面
 * @param {object} 路由组件 render 函数的 props 对象
 * @param {reactComponent} 用户希望前往的页面
 * @param {boolean} 访问该页面是否需要登录
 * @param {array} 能访问该页面需要的权限
 * @returns {reactComponent} 最终前往的页面
 */
function getComponent(props, Component, requireLogin, requireAuthority) {
  const { location } = props;
  const result = checkAuthority(requireLogin, requireAuthority);
  const components = {
    requireLogin: <Redirect to={{ pathname: '/login', state: { from: location } }} />,
    requireAuthority: <Component {...props} />,
    pass: <Component {...props} />,
  };

  return components[result];
}

function PrivateRoute({
  component: Component,
  requireLogin,
  requireAuthority,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => getComponent(props, Component, requireLogin, requireAuthority)}
    />
  );
}

export default PrivateRoute;
