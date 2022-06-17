import { render } from '@testing-library/react';
import Unstable_FormControl from './Unstable_FormControl';

describe('Unstable_FormControl', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_FormControl />);

    expect(baseElement).toBeTruthy();
  });
});
