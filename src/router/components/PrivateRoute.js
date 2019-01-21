import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { Button, notification, Icon } from 'antd';

/**
 * 打开权限消息提示框
 * @param {string} 用户最初点击跳转按钮所在页面的相对路径
 * @param {objedt}
 * @returns {null}
 */
function openNotification(pathOri, history) {
  const key = 'authorityKey';
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      我知道了
    </Button>
  );

  notification.open({
    key,
    message: '拒绝访问',
    description: '对不起，您没有访问该页面的权限，请获取足够的权限之后重试。',
    icon: <Icon type="frown" />,
    btn,
  });

  history.push(pathOri);
  return null;
}

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
 * @oaram {string} 用户最初点击跳转按钮所在页面的相对路径
 * @param {reactComponent} 用户希望前往的页面
 * @param {boolean} 访问该页面是否需要登录
 * @param {array} 能访问该页面需要的权限
 * @returns {reactComponent} 最终前往的页面
 */
function getComponent(props, pathOri, Component, requireLogin, requireAuthority) {
  const { location, history } = props;
  const result = checkAuthority(requireLogin, requireAuthority);
  const components = {
    requireLogin: () => <Redirect to={{ pathname: '/login', state: { from: location } }} />,
    requireAuthority: () => openNotification(pathOri, history),
    pass: () => <Component {...props} />,
  };

  return components[result]();
}

function PrivateRoute({
  component: Component,
  pathOri,
  requireLogin,
  requireAuthority,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => getComponent(props, pathOri, Component, requireLogin, requireAuthority)}
    />
  );
}

export default PrivateRoute;
