/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState, useEffect } from 'react';

import Counter from '../components/Counter';

import getTimeFromDates from '../utils/get-time-from-dates';

interface Props {
  loginTime: number;
}

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

const Welcome = (props: Props) => {
  const startTime = getTimeFromDates(Date.now(), props.loginTime);
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeFromDates(Date.now(), props.loginTime);
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      css={css`
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      `}
    >
      <section>
        <h1
          css={css`
            text-align: center;
            font-size: 48px;
            margin-bottom: 12px;
          `}
        >
          Welcome!
        </h1>
        <p
          css={css`
            text-align: center;
            color: #808485;
          `}
        >
          The last time you accessed was
        </p>
      </section>
      <section>
        <div
          css={css`
            display: flex;
            justify-content: space-evenly;
            color: #808485;
          `}
        >
          <Counter count={time.days} name="days" />
          <Counter count={time.hours} name="hours" />
          <Counter count={time.minutes} name="minutes" />
          <Counter count={time.seconds} name="seconds" />
        </div>
      </section>
      <section>
        <button
          css={css`
            display: block;
            margin: 0 auto;
            border: 0;
            padding: 15px;
            width: 120px;
            background-color: #2f6cdf;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
          `}
        >
          LOGOUT
        </button>
      </section>
    </div>
  );
};

export default Welcome;
