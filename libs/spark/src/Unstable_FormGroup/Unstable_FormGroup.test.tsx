import { render } from 'compat-testing-library-react-17';
import Unstable_FormGroup from './Unstable_FormGroup';

describe('Unstable_FormGroup', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_FormGroup />);

    expect(baseElement).toBeTruthy();
  });
});
