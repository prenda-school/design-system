import { render } from '@testing-library/react';
import Unstable_CheckboxGroupField from './Unstable_CheckboxGroupField';

describe('Unstable_CheckboxGroupField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_CheckboxGroupField helperText="Helper text" label="Label">
        <input id="id-1" name="name-1" type="checkbox" value="value-1" />
        <label htmlFor="id-1">Label one</label>
        <input id="id-2" name="name-2" type="checkbox" value="value-2" />
        <label htmlFor="id-2">Label two</label>
      </Unstable_CheckboxGroupField>
    );

    expect(baseElement).toBeTruthy();
  });
});
