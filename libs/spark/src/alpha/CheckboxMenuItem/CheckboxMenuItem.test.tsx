import { render } from '@testing-library/react';
import CheckboxMenuItem from './CheckboxMenuItem';

describe('CheckboxMenuItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <CheckboxMenuItem value="value">Label</CheckboxMenuItem>
    );

    expect(baseElement).toBeTruthy();
  });
});
