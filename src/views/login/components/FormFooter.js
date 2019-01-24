import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'antd';

const FormFooter = () => (
  <Fragment>
    <div className="form-footer">
      <div className="icon-wrapper">
        <span><FormattedMessage id="login_mode" /></span>
        <Icon type="alipay-circle" />
        <Icon type="taobao-circle" />
        <Icon type="wechat" />
        <Icon type="weibo-circle" />
      </div>
      <a href=""><FormattedMessage id="register_account" /></a>
    </div>
    <div className="login-footer">Copyright © 2018 票票猫版权所有</div>
  </Fragment>
);

export default FormFooter;
