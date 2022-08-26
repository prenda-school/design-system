import { render } from '@testing-library/react';
import MenuItem from '../MenuItem';
import Unstable_Select from './Unstable_Select';

describe('Unstable_Select', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Select value="">
        <MenuItem value="" />
      </Unstable_Select>
    );

    expect(baseElement).toBeTruthy();
  });
});
