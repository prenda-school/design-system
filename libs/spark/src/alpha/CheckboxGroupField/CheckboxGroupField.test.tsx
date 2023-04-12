import { render } from '@testing-library/react';
import CheckboxGroupField from './CheckboxGroupField';

describe('CheckboxGroupField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <CheckboxGroupField helperText="Helper text" label="Label">
        <input id="id-1" name="name-1" type="checkbox" value="value-1" />
        <label htmlFor="id-1">Label one</label>
        <input id="id-2" name="name-2" type="checkbox" value="value-2" />
        <label htmlFor="id-2">Label two</label>
      </CheckboxGroupField>
    );

    expect(baseElement).toBeTruthy();
  });
});
