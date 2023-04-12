import { render } from '@testing-library/react';
import RadioGroup from './RadioGroup';

describe('RadioGroup', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<RadioGroup />);

    expect(baseElement).toBeTruthy();
  });
});
