import { render } from 'compat-testing-library-react-17';
import Unstable_IconButton from './Unstable_IconButton';

describe('Unstable_IconButton', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_IconButton />);

    expect(baseElement).toBeTruthy();
  });
});
