import { render } from '@testing-library/react';
import RadioField from './RadioField';

describe('RadioField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <RadioField label="Label" helperText="helperText" value="value" />
    );

    expect(baseElement).toBeTruthy();
  });
});
