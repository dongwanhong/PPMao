import React, { Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import LoginForm from './components/LoginForm';
import FormHeader from './components/FormHeader';
import FormTips from './components/FormTips';
import FormInputs from './components/FormInputs';
import FormButtons from './components/FormButtons';
import FormFooter from './components/FormFooter';

const Login = () => (
  <DocumentTitle title="登录-票票猫">
    <LoginForm>
      {form => (
        <Fragment>
          <FormHeader />
          <FormTips />
          <FormInputs form={form} />
          <FormButtons form={form} />
          <FormFooter />
        </Fragment>
      )}
    </LoginForm>
  </DocumentTitle>
);

export default Login;
