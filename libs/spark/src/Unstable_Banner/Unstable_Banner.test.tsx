import { render } from 'compat-testing-library-react-17';
import Unstable_Banner from './Unstable_Banner';

describe('Unstable_Banner', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Banner>Message.</Unstable_Banner>);

    expect(baseElement).toBeTruthy();
  });
});
