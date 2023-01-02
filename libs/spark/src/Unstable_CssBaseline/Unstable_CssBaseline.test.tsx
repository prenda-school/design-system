import { render } from 'compat-testing-library-react-17';
import Unstable_CssBaseline from './Unstable_CssBaseline';

describe('Unstable_CssBaseline', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_CssBaseline />);

    expect(baseElement).toBeTruthy();
  });
});
