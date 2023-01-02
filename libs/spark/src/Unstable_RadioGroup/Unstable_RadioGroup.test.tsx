import { render } from 'compat-testing-library-react-17';
import Unstable_RadioGroup from './Unstable_RadioGroup';

describe('Unstable_RadioGroup', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_RadioGroup />);

    expect(baseElement).toBeTruthy();
  });
});
