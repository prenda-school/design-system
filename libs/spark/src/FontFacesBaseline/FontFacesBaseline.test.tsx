import { render } from 'compat-testing-library-react-17';
import FontFacesBaseline from './FontFacesBaseline';

describe('FontFacesBaseline', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<FontFacesBaseline />);

    expect(baseElement).toBeTruthy();
  });
});
