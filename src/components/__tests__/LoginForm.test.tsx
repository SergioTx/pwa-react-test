import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import LoginForm from '../LoginForm';

describe('LoginForm Component tests', () => {
  it('Calls the onSubmit function when someone clicks on the button', () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByText('Log in'));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith('', '');
  });
});
