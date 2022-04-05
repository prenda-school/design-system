import { render } from '@testing-library/react';
import Unstable_InputLabel from './Unstable_InputLabel';

describe('Unstable_InputLabel', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_InputLabel />);

    expect(baseElement).toBeTruthy();
  });
});
