import { render } from 'compat-testing-library-react-17';
import Unstable_ContentGroup from './Unstable_ContentGroup';

describe('Unstable_ContentGroup', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_ContentGroup primary="Text" />);

    expect(baseElement).toBeTruthy();
  });
});
