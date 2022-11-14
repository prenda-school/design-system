import { render } from '@testing-library/react';
import Unstable_Toast from './Unstable_Toast';

describe('Unstable_Toast', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Toast>Message</Unstable_Toast>);

    expect(baseElement).toBeTruthy();
  });
});
