import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicButton from './basic-button';

describe('BasicButton', () => {
  it('renders without crashing', () => {
    render(<BasicButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders children prop', () => {
    render(<BasicButton>Click Me</BasicButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});