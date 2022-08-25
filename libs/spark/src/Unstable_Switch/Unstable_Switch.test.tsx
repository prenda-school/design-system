import { render } from '@testing-library/react';
import Unstable_Switch from './Unstable_Switch';

describe('Unstable_Switch', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Switch aria-label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
