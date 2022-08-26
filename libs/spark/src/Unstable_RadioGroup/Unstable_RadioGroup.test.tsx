import { render } from '@testing-library/react';
import Unstable_RadioGroup from './Unstable_RadioGroup';

describe('Unstable_RadioGroup', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_RadioGroup />);

    expect(baseElement).toBeTruthy();
  });
});
