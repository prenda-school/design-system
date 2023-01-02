import { render } from 'compat-testing-library-react-17';
import Unstable_CheckboxMenuItem from './Unstable_CheckboxMenuItem';

describe('Unstable_CheckboxMenuItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_CheckboxMenuItem value="value">Label</Unstable_CheckboxMenuItem>
    );

    expect(baseElement).toBeTruthy();
  });
});
