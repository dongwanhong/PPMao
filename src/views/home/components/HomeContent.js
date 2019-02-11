import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import PrivateRoute from '@/router/components/PrivateRoute';
import Dashboard from '../../Dashboard';
import ReleaseDemand from '../../ReleaseDemand';

const HomeContent = (props) => {
  const { Content } = Layout;
  const { match } = props;
  const { path } = match;

  return (
    <Content>
      <Route exact path={path} component={Dashboard} />
      <PrivateRoute
        exactm
        pathOri={path}
        path={`${path}/release-demand`}
        component={ReleaseDemand}
        requireLogin
        requireAuthority={['requireAuthority']}
      />
    </Content>
  );
};

export default withRouter(HomeContent);
