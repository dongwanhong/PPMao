import React from 'react';
import { Layout } from 'antd';
import HomeHeader from './components/HomeHeader';
import HomeContent from './components/HomeContent';
import HomeFooter from './components/HomeFooter';

const Home = () => (
  <Layout className="home">
    <HomeHeader />
    <HomeContent />
    <HomeFooter />
  </Layout>
);

export default Home;
