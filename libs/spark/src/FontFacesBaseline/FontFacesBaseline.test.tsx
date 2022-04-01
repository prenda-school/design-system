import { render } from '@testing-library/react';
import FontFacesBaseline from './FontFacesBaseline';

describe('FontFacesBaseline', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<FontFacesBaseline />);

    expect(baseElement).toBeTruthy();
  });
});
