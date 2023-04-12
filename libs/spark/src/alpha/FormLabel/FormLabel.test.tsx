import { render } from '@testing-library/react';
import FormLabel from './FormLabel';

describe('FormLabel', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<FormLabel>Label</FormLabel>);

    expect(baseElement).toBeTruthy();
  });
});
