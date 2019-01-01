import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routeConfig from './routeConfig';

function setRouter(router) {
  const localRouter = [...router];

  return localRouter.map((item) => {
    const localItem = { ...item };

    /*
     * react-router 4.x中嵌套Route组件，不再预先声明您的路由,而是在组件呈现时动态声明
     * 否着你将收到警告：
     * Warning: You should not use <Route> component and <Route children> in the same route;
     * <Route children> will be ignored.
     * if (localItem.children && localItem.children.length) {
     *   const { children } = localItem;
     *   delete localItem.children;
     *   return (
     *     <Route {...localItem}>
     *       {setRouter(children)}
     *     </Route>
     *   );
     * }
     */

    return <Route {...localItem} />;
  });
}

function RouterProvider() {
  return (
    <HashRouter basename="">
      <Switch>
        {setRouter(routeConfig)}
      </Switch>
    </HashRouter>
  );
}

export default RouterProvider;
