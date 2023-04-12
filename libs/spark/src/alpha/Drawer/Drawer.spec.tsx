import { render } from '@testing-library/react';
import Drawer from './Drawer';

describe('Drawer', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Drawer />);

    expect(baseElement).toBeTruthy();
  });
});
