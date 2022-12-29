import { render } from 'compat-testing-library-react-17';
import Unstable_Card from './Unstable_Card';

describe('Unstable_Card', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Card />);

    expect(baseElement).toBeTruthy();
  });
});
