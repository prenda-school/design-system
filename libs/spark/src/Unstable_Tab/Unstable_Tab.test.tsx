import { render } from '@testing-library/react';
import Unstable_Tab from './Unstable_Tab';

describe('Unstable_Tab', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Tab value="0" />);

    expect(baseElement).toBeTruthy();
  });
});
