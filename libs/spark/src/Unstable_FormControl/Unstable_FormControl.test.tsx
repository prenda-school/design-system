import { render } from 'compat-testing-library-react-17';
import Unstable_FormControl from './Unstable_FormControl';

describe('Unstable_FormControl', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_FormControl />);

    expect(baseElement).toBeTruthy();
  });
});
