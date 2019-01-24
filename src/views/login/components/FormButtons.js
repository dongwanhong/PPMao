import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Form,
  Button,
  Checkbox,
} from 'antd';

const { Item } = Form;
const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);

const FormButtons = (props) => {
  const { form } = props;
  const { getFieldDecorator, getFieldsError } = form;

  return (
    <Item className="login-button">
      <div className="checkbox-wrapper">
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox><FormattedMessage id="auto_login" /></Checkbox>)}
        <a className="login-form-forgot" href=""><FormattedMessage id="forgot_password" /></a>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="sub-button"
        disabled={hasErrors(getFieldsError())}
      >
        <FormattedMessage id="btn_submit" />
      </Button>
    </Item>
  );
};

export default FormButtons;
