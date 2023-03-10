import { render } from '@testing-library/react';
import Unstable_Dropdown from '../Unstable_Dropdown';
import Unstable_DropdownTrigger from './Unstable_DropdownTrigger';

describe('Unstable_DropdownTrigger', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Dropdown>
        <Unstable_DropdownTrigger />
      </Unstable_Dropdown>
    );

    expect(baseElement).toBeTruthy();
  });
});
