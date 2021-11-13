import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders', () => {
    render(<Button>Label</Button>);

    expect(screen.getByText('Label')).toBeTruthy();
  });
});
