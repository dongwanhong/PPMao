import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Form } from 'antd';
// eslint-disable-next-line
import LoginContext from '../context';
import loginApi from '@/api/user';

const { create } = Form;

@withRouter
@create({ name: 'login' })
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultValue: {
        show: false,
        type: 'info',
        message: <FormattedMessage id="tip_message" />,
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
    const {
      form: { validateFields },
      location: { state },
      history,
    } = this.props;
    const { from = '' } = state || {};
    const { pathname } = from || { pathname: '/' };
    validateFields((error, values) => {
      if (!error) {
        loginApi(values).then(({ status, data }) => {
          const { token = '', userInfo = null, errorCode = '' } = data;
          if (status === 200 && token) {
            sessionStorage.token = token;
            localStorage.userInfo = userInfo;
            history.push(pathname);
          } else {
            this.setState(() => ({
              defaultValue: {
                show: true,
                type: 'error',
                message: <FormattedMessage id={errorCode} />,
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
          <div className="login-container">
            {children(form)}
          </div>
        </Form>
      </LoginContext.Provider>
    );
  }
}

export default LoginForm;
