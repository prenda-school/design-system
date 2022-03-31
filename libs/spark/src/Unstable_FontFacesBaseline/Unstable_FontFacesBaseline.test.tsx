import { render } from '@testing-library/react';
import Unstable_FontFacesBaseline from './Unstable_FontFacesBaseline';

describe('Unstable_FontFacesBaseline', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_FontFacesBaseline />);

    expect(baseElement).toBeTruthy();
  });
});
