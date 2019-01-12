import React from 'react';
import { Icon } from 'antd';

export default {
  UserName: {
    props: {
      id: 'username',
      type: 'text',
      prefix: <Icon type="user" />,
      placeholder: 'admin',
    },
    rules: [
      {
        required: true,
        message: 'Please input your username, which is required.',
      },
    ],
  },
  Password: {
    props: {
      id: 'password',
      type: 'password',
      prefix: <Icon type="lock" />,
      placeholder: 'Admin123',
      autoComplete: 'off',
    },
    rules: [
      {
        required: true,
        message: 'Please input your password, which is required.',
      },
    ],
  },
};
