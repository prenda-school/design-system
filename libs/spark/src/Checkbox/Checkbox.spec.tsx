import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders', () => {
    render(<Checkbox inputProps={{ 'aria-label': 'label' }} />);

    expect(screen.getByLabelText('label')).toBeTruthy();
  });
});
