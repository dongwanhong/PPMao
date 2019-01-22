import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'antd';


const FormFooter = () => (
  <div>
    <span><FormattedMessage id="login_mode" /></span>
    <Icon type="alipay-circle" />
    <Icon type="taobao-circle" />
    <Icon type="wechat" />
    <Icon type="weibo-circle" />
    <a href=""><FormattedMessage id="register_account" /></a>
  </div>
);

export default FormFooter;
