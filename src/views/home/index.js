import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
// import store from '../../store';
import { connect } from 'react-redux';
import { Button } from 'antd';

const Home = (props) => {
  const { text } = props;
  return (
    <div>
      <div>
        <Button type="primary">Check Ant</Button>
      </div>
      <FormattedMessage id="helloWorld" />
      <div>{text}</div>
      <Link to="/product">go</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  text: state.get('home').get('text'),
});

export default connect(mapStateToProps, null)(Home);
