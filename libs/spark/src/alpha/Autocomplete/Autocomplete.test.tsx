import { render } from '@testing-library/react';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Autocomplete options={['value-1', 'value-2']} />
    );

    expect(baseElement).toBeTruthy();
  });
});
