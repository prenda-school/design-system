import { render } from '@testing-library/react';
import Dropdown from '../Dropdown';
import DropdownTrigger from './DropdownTrigger';

describe('DropdownTrigger', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Dropdown>
        <DropdownTrigger />
      </Dropdown>
    );

    expect(baseElement).toBeTruthy();
  });
});
