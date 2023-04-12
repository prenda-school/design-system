import { render } from '@testing-library/react';
import Toast from './Toast';

describe('Toast', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Toast>Message</Toast>);

    expect(baseElement).toBeTruthy();
  });
});
