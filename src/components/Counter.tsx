/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface Props {
  count: number;
  name: string;
}

const Counter = (props: Props) => {
  const { count, name } = props;
  const countWithZeros = count.toString().padStart(2, '0');

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          font-weight: bold;
          font-size: 36px;
        `}
      >
        {countWithZeros}
      </div>
      <div
        css={css`
          font-size: 24px;
        `}
      >
        {name}
      </div>
    </div>
  );
};

export default Counter;
