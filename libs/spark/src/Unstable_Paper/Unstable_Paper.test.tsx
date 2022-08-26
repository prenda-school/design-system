import { render } from '@testing-library/react';
import Unstable_Paper from './Unstable_Paper';

describe('Unstable_Paper', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Paper />);

    expect(baseElement).toBeTruthy();
  });
});
