import React from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '@/assets/images/logo.png';

const FormFooter = () => (
  <div className="form-header">
    <div className="form-title">
      <img src={logo} alt="logo_cat" />
      <h1><FormattedMessage id="app_name" /></h1>
    </div>
    <p><FormattedMessage id="app_description" /></p>
  </div>
);

export default FormFooter;
