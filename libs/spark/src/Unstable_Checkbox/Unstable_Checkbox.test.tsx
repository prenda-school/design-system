import { render } from '@testing-library/react';
import Unstable_Checkbox from './Unstable_Checkbox';

describe('Unstable_Checkbox', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Checkbox aria-label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
