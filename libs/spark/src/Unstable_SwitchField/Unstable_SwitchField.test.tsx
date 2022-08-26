import { render } from '@testing-library/react';
import Unstable_SwitchField from './Unstable_SwitchField';

describe('Unstable_SwitchField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_SwitchField
        label="Label"
        helperText="helperText"
        value="value"
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
