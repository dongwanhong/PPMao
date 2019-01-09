import React, {
  Component,
} from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  // Checkbox,
} from 'antd';

const { Item, create } = Form;
const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);

@create({ name: 'login' })
class LoginForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    const { form: { validateFields } } = this.props;
    validateFields();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { form: { validateFields } } = this.props;
    validateFields((error, values) => {
      if (!error) {
        // eslint-disable-next-line
        console.log(values);
      }
    });
  }

  render() {
    const {
      form: {
        getFieldDecorator,
        getFieldsError,
        getFieldError,
        isFieldTouched,
      },
    } = this.props;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Item
          validateStatus={userNameError ? 'error' : 'validating'}
          help={userNameError || ''}
        >
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: 'Please input your username, which is required.' },
            ],
          })(<Input prefix={<Icon type="user" />} type="text" placeholder="Username" />)}
        </Item>
        <Item
          validateStatus={passwordError ? 'error' : 'validating'}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input your password, which is required.' },
            ],
          })(<Input prefix={<Icon type="lock" />} type="password" placeholder="Password" autoComplete="off" />)}
        </Item>
        <Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </Item>
      </Form>
    );
  }
}

export default LoginForm;
