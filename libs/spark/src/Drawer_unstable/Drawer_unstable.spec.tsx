import { render } from '@testing-library/react';
import Drawer_unstable from './Drawer_unstable';

describe('Drawer_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Drawer_unstable />);

    expect(baseElement).toBeTruthy();
  });
});
