import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../app';

describe('App', () => {
  test('should render App component', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
