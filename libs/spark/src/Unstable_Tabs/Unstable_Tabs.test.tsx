import { render } from 'compat-testing-library-react-17';
import Unstable_Tabs from './Unstable_Tabs';

describe('Unstable_Tabs', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Tabs value="0" />);

    expect(baseElement).toBeTruthy();
  });
});
