import React, { Component } from 'react';
import { Form } from 'antd';

const { create } = Form;

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
    const { form, children } = this.props;

    return (
      <Form layout="vertical" className="login" onSubmit={this.handleSubmit}>
        {children(form)}
      </Form>
    );
  }
}

export default LoginForm;
