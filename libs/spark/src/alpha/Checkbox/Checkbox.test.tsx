import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Checkbox aria-label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
