import { render } from '@testing-library/react';
import CheckboxField from './CheckboxField';

describe('CheckboxField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <CheckboxField label="Label" helperText="helperText" value="value" />
    );

    expect(baseElement).toBeTruthy();
  });
});
