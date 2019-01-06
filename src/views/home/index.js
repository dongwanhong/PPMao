import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Dashboard from '../dashboard';

const Home = (props) => {
  const { Header, Content, Footer } = Layout;
  const { text, match } = props;
  const { url } = match;

  return (
    <Layout>
      <Header>票票猫</Header>
      <Content>
        <div>{text}</div>
        <Route exact path={`${url}/`} component={Dashboard} />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

const mapStateToProps = state => ({
  text: state.get('home').get('text'),
});

export default connect(mapStateToProps, null)(Home);
