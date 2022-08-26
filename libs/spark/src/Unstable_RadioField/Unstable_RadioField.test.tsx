import { render } from '@testing-library/react';
import Unstable_RadioField from './Unstable_RadioField';

describe('Unstable_RadioField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_RadioField
        label="Label"
        helperText="helperText"
        value="value"
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
