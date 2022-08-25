import { render } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<TextField />);

    expect(baseElement).toBeTruthy();
  });
});
