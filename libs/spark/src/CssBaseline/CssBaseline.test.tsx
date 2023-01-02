import { render } from 'compat-testing-library-react-17';
import CssBaseline from './CssBaseline';

describe('CssBaseline', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<CssBaseline />);

    expect(baseElement).toBeTruthy();
  });
});
