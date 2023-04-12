import { render } from '@testing-library/react';
import Radio from './Radio';

describe('Radio', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Radio aria-label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
