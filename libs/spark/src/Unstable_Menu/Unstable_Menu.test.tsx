import { render } from 'compat-testing-library-react-17';
import Unstable_Menu from './Unstable_Menu';

describe('Unstable_Menu', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Menu open anchorEl={() => document.createElement('div')} />
    );

    expect(baseElement).toBeTruthy();
  });
});
