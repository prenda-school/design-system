import { render } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Divider />);

    expect(baseElement).toBeTruthy();
  });
});
