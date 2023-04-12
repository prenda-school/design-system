import { render } from '@testing-library/react';
import Tabs from './Tabs';

describe('Tabs', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Tabs value="0" />);

    expect(baseElement).toBeTruthy();
  });
});
