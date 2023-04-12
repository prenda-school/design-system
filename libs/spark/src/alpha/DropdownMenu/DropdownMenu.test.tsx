import { render } from '@testing-library/react';
import Dropdown from '../Dropdown';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Dropdown>
        <DropdownMenu />
      </Dropdown>
    );

    expect(baseElement).toBeTruthy();
  });
});
