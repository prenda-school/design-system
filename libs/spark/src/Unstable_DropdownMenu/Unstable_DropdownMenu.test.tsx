import { render } from '@testing-library/react';
import Unstable_Dropdown from '../Unstable_Dropdown';
import Unstable_DropdownMenu from './Unstable_DropdownMenu';

describe('DropdownMenu', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Dropdown>
        <Unstable_DropdownMenu />
      </Unstable_Dropdown>
    );

    expect(baseElement).toBeTruthy();
  });
});
