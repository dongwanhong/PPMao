import React, { Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import LoginForm from './components/LoginForm';
import FormInputs from './components/FormInputs';
import FormButtons from './components/FormButtons';
import FormHeader from './components/FormHeader';
import FormFooter from './components/FormFooter';

const Login = () => (
  <DocumentTitle title="登录-票票猫">
    <LoginForm>
      {form => (
        <Fragment>
          <FormHeader />
          <FormInputs form={form} />
          <FormButtons form={form} />
          <FormFooter />
        </Fragment>
      )}
    </LoginForm>
  </DocumentTitle>
);

export default Login;
