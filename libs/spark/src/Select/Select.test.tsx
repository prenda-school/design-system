import { render } from '@testing-library/react';
import MenuItem from '../MenuItem';
import Select from './Select';

describe('Select', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Select value="">
        <MenuItem value="" />
      </Select>
    );

    expect(baseElement).toBeTruthy();
  });
});
