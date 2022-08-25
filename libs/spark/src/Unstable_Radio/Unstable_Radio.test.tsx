import { render } from '@testing-library/react';
import Unstable_Radio from './Unstable_Radio';

describe('Unstable_Radio', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Radio aria-label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
