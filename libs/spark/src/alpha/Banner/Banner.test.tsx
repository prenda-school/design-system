import { render } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Banner>Message.</Banner>);

    expect(baseElement).toBeTruthy();
  });
});
