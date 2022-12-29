import { render } from 'compat-testing-library-react-17';
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
