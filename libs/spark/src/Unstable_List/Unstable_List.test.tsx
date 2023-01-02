import { render } from 'compat-testing-library-react-17';
import Unstable_List from './Unstable_List';

describe('Unstable_List', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_List />);

    expect(baseElement).toBeTruthy();
  });
});
