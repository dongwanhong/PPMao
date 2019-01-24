import React from 'react';
import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';

const Dashboard = () => (
  <div>
    <div>
      <Button type="primary">Check Ant</Button>
    </div>
    {/* <FormattedMessage id="helloWorld" /> */}
    <Link to="/login">go</Link>
    <br />
  </div>
);

export default Dashboard;
