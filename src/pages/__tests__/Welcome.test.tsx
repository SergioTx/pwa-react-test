import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Welcome from '../Welcome';
import { act } from 'react-dom/test-utils';

const wait1second = () => new Promise((res) => setInterval(res, 1000));

describe('Welcome Component tests', () => {
  it('Calls the onLogout function when someone clicks on the button', () => {
    const onLogout = jest.fn();
    render(<Welcome loginTime={Date.now()} onLogout={onLogout} />);

    fireEvent.click(screen.getByText('LOGOUT'));

    expect(onLogout).toHaveBeenCalled();
  });

  it('Renders 4 counters with the difference time and updates after a second', async () => {
    const onLogout = jest.fn();
    const date = Date.now();
    render(<Welcome loginTime={date} onLogout={onLogout} />);

    const zeroCounters = screen.getAllByText('00');
    expect(zeroCounters.length).toBe(4);

    await act(async () => {
      await wait1second();
    });

    const zeroCounters2 = screen.getAllByText('00');
    expect(zeroCounters2.length).toBe(3);
  });
});
