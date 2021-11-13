import * as React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';
import { ChevronDown } from '../internal';

describe('IconButton', () => {
  it('renders', () => {
    render(
      <IconButton>
        <ChevronDown data-testid="test" />
      </IconButton>
    );

    expect(screen.getByTestId('test')).toBeTruthy();
  });
});
