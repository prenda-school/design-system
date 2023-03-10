import { render } from '@testing-library/react';
import Unstable_Autocomplete from './Unstable_Autocomplete';

describe('Unstable_Autocomplete', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Autocomplete options={['value-1', 'value-2']} />
    );

    expect(baseElement).toBeTruthy();
  });
});
