import { render } from 'compat-testing-library-react-17';
import Unstable_Paper from './Unstable_Paper';

describe('Unstable_Paper', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Paper />);

    expect(baseElement).toBeTruthy();
  });
});
