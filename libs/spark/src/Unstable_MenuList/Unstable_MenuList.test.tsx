import { render } from 'compat-testing-library-react-17';
import Unstable_MenuList from './Unstable_MenuList';

describe('Unstable_MenuList', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_MenuList />);

    expect(baseElement).toBeTruthy();
  });
});
