import { render } from '@testing-library/react';
import Unstable_Banner from './Unstable_Banner';

describe('Unstable_Banner', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Banner>Message.</Unstable_Banner>);

    expect(baseElement).toBeTruthy();
  });
});
