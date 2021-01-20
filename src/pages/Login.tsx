/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div
      css={css`
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: 50%;
          height: 40%;
          min-height: 300px;
          max-height: 400px;
          max-width: 400px;
          min-width: 300px;
        `}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
