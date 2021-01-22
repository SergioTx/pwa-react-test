import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Login from '../Login';

describe('Login Component tests', () => {
  it('Calls the onSubmit function when someone clicks on the button', () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} />);

    fireEvent.click(screen.getByText('Log in'));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith('', '');
  });
});
