import { render } from '@testing-library/react';
import DropdownContext from '../DropdownContext';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <DropdownContext>
        <DropdownMenu />
      </DropdownContext>
    );

    expect(baseElement).toBeTruthy();
  });
});
