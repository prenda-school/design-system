import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Radio from './Radio';

describe('Radio', () => {
  it('renders', () => {
    render(<Radio inputProps={{ 'aria-label': 'label' }} />);

    expect(screen.getByLabelText('label')).toBeTruthy();
  });
});
