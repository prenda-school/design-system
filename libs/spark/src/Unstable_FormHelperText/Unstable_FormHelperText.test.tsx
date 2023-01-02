import { render } from 'compat-testing-library-react-17';
import Unstable_FormHelperText from './Unstable_FormHelperText';

describe('Unstable_FormHelperText', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_FormHelperText />);

    expect(baseElement).toBeTruthy();
  });
});
