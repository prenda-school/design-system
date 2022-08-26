import { render } from '@testing-library/react';
import Unstable_Divider from './Unstable_Divider';

describe('Unstable_Divider', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Divider />);

    expect(baseElement).toBeTruthy();
  });
});
