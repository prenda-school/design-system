import { render } from '@testing-library/react';
import FormControl from './FormControl';

describe('FormControl', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<FormControl />);

    expect(baseElement).toBeTruthy();
  });
});
