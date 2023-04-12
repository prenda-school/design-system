import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Input />);

    expect(baseElement).toBeTruthy();
  });
});
