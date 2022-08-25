import { render } from '@testing-library/react';
import Unstable_CheckboxMenuItem from './Unstable_CheckboxMenuItem';

describe('Unstable_CheckboxMenuItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_CheckboxMenuItem value="value">Label</Unstable_CheckboxMenuItem>
    );

    expect(baseElement).toBeTruthy();
  });
});
