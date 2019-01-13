import React from 'react';
import { Alert } from 'antd';
import LoginContext from '../context';

const FormTips = () => (
  <LoginContext.Consumer>
    {tipsInfo => (
      <div className="error-tips">
        <Alert message={tipsInfo.message} type={tipsInfo.type} showIcon />
      </div>
    )}
  </LoginContext.Consumer>
);

export default FormTips;
