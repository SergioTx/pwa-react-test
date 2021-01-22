/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';

interface Props {
  count: number;
  name: string;
}

const Counter = (props: Props): EmotionJSX.Element => {
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
          font-size: 60px;
        `}
      >
        {countWithZeros}
      </div>
      <div
        css={css`
          font-size: 24px;
          margin-top: -12px;
        `}
      >
        {name}
      </div>
    </div>
  );
};

export default Counter;
