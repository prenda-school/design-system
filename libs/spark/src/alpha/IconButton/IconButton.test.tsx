import { render } from '@testing-library/react';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<IconButton />);

    expect(baseElement).toBeTruthy();
  });
});
