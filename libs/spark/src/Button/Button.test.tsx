import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Button />);

    expect(baseElement).toBeTruthy();
  });
});
