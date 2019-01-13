import {
  createContext,
} from 'react';

const defaultValue = {
  show: true,
  type: 'info',
  message: '请输入账户和密码：admin/Admin1234',
};
const LoginContext = createContext(defaultValue);

export default LoginContext;
