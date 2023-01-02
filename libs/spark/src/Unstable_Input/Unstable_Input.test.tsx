import { render } from 'compat-testing-library-react-17';
import Unstable_Input from './Unstable_Input';

describe('Unstable_Input', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Input />);

    expect(baseElement).toBeTruthy();
  });
});
