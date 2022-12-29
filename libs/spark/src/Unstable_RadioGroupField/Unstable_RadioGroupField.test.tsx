import { render } from 'compat-testing-library-react-17';
import Unstable_RadioGroupField from './Unstable_RadioGroupField';

describe('Unstable_RadioGroupField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_RadioGroupField helperText="Helper text" label="Label">
        <input id="id-1" name="name-1" type="radio" value="value-1" />
        <label htmlFor="id-1">Label one</label>
        <input id="id-2" name="name-2" type="radio" value="value-2" />
        <label htmlFor="id-2">Label two</label>
      </Unstable_RadioGroupField>
    );

    expect(baseElement).toBeTruthy();
  });
});
