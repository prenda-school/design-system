import { render } from 'compat-testing-library-react-17';
import Unstable_TextField from './Unstable_TextField';

describe('Unstable_TextField', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_TextField />);

    expect(baseElement).toBeTruthy();
  });
});
