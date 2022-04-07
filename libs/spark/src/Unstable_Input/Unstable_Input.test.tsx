import { render } from '@testing-library/react';
import Unstable_Input from './Unstable_Input';

describe('Unstable_Input', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Input />);

    expect(baseElement).toBeTruthy();
  });
});
