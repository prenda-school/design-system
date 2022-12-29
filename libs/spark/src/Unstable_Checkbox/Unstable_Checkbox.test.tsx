import { render } from 'compat-testing-library-react-17';
import Unstable_Checkbox from './Unstable_Checkbox';

describe('Unstable_Checkbox', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Checkbox aria-label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
