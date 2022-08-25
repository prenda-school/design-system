import { render } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Menu open anchorEl={() => document.createElement('div')} />
    );

    expect(baseElement).toBeTruthy();
  });
});
