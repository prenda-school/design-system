import { render } from '@testing-library/react';
import Unstable_CheckboxField from './Unstable_CheckboxField';

describe('Unstable_CheckboxField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_CheckboxField
        label="Label"
        helperText="helperText"
        value="value"
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
