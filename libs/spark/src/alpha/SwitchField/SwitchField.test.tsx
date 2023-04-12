import { render } from '@testing-library/react';
import SwitchField from './SwitchField';

describe('SwitchField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <SwitchField label="Label" helperText="helperText" value="value" />
    );

    expect(baseElement).toBeTruthy();
  });
});
