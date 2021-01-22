import React from 'react';
import { render, screen } from '@testing-library/react';

import Counter from '../Counter';

describe('Counter Component tests', () => {
  it('takes 2 params and renders them', () => {
    render(<Counter count={13} name="minutes" />);

    expect(screen.getByText('minutes')).toBeDefined();
    expect(screen.getByText('13')).toBeDefined();
  });

  it('converts numbers to 2 digits', () => {
    render(<Counter count={1} name="" />);

    expect(screen.getByText('01')).toBeDefined();
  });

  it('does not truncate numbers longer than 2 digits', () => {
    render(<Counter count={123} name="" />);

    expect(screen.getByText('123')).toBeDefined();
  });
});
