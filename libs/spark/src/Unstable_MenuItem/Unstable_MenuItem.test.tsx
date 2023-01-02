import { render } from 'compat-testing-library-react-17';
import Unstable_MenuItem from './Unstable_MenuItem';

describe('Unstable_MenuItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_MenuItem>Label</Unstable_MenuItem>
    );

    expect(baseElement).toBeTruthy();
  });
});
