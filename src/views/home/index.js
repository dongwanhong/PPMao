import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PrivateRoute from '@/router/components/PrivateRoute';
import Dashboard from '../Dashboard';
import ReleaseDemand from '../ReleaseDemand';

const Home = (props) => {
  const { Header, Content, Footer } = Layout;
  const { text, match } = props;
  const { path } = match;

  return (
    <Layout>
      <Header>票票猫</Header>
      <Content>
        <Link to={`${path}/release-demand`}>测试基本鉴权功能</Link>
        <div>{text}</div>
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
      <Footer>footer</Footer>
    </Layout>
  );
};

const mapStateToProps = state => ({
  text: state.get('home').get('text'),
});

export default connect(mapStateToProps, null)(Home);
