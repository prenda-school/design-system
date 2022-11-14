import { render } from '@testing-library/react';
import Unstable_Tabs from './Unstable_Tabs';

describe('Unstable_Tabs', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Tabs value="0" />);

    expect(baseElement).toBeTruthy();
  });
});
