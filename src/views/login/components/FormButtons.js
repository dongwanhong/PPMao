import React from 'react';
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
    <Item>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(<Checkbox>自动登录</Checkbox>)}
      <a className="login-form-forgot" href="">忘记密码</a>
      <Button
        type="primary"
        htmlType="submit"
        className="sub-button"
        disabled={hasErrors(getFieldsError())}
      >
        Log in
      </Button>
    </Item>
  );
};

export default FormButtons;
