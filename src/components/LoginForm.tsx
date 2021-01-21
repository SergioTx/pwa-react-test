/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { FormEvent, useState } from 'react';

interface Props {
  onSubmit: (email: string, password: string) => void;
}

const formStyles = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const inputStyles = css`
  border: 0;
  border-bottom: 1px solid black;
  padding: 10px;
  width: 100%;
`;

const buttonStyles = css`
  width: 100%;
  margin: 0;
  border: 0;
  padding: 10px;
  background-color: #154a84;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onSubmit(email, password);
  };
  return (
    <form onSubmit={onSubmit} css={formStyles}>
      <img
        src={'../assets/hide.svg'}
        alt="lock image"
        height="100px"
        width="100px"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        id="email"
        autoComplete="email"
        css={inputStyles}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        autoComplete="current-password"
        css={inputStyles}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value="Log in" css={buttonStyles} />
    </form>
  );
};

export default LoginForm;
