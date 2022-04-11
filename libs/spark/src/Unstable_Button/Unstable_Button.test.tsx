import { render } from '@testing-library/react';
import Unstable_Button from './Unstable_Button';

describe('Unstable_Button', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Button />);

    expect(baseElement).toBeTruthy();
  });
});
