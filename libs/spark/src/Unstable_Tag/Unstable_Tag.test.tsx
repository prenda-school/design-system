import { render } from '@testing-library/react';
import Unstable_Tag from './Unstable_Tag';

describe('Unstable_Tag', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Tag label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
