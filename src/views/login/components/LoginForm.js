import React, { Component } from 'react';
import { Form } from 'antd';
import LoginContext from '../context';
import loginApi from '@/api/user';

const { create } = Form;

@create({ name: 'login' })
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultValue: {
        show: false,
        type: 'info',
        message: '请输入账户和密码：admin/Admin1234',
      },
    };
  }

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
        loginApi(values).then(({ status, data }) => {
          const { sessionId = '', userInfo = null, errorCode = '' } = data;
          if (status === 200 && sessionId) {
            sessionStorage.sessionId = sessionId;
            localStorage.userInfo = userInfo;
          } else {
            this.setState(() => ({
              defaultValue: {
                show: true,
                type: 'error',
                message: errorCode,
              },
            }));
          }
        });
      } else {
        /* Nothing to do */
      }
    });
  }

  render() {
    const { form, children } = this.props;
    const { defaultValue } = this.state;

    return (
      <LoginContext.Provider value={defaultValue}>
        <Form layout="vertical" className="login" onSubmit={this.handleSubmit}>
          {children(form)}
        </Form>
      </LoginContext.Provider>
    );
  }
}

export default LoginForm;
