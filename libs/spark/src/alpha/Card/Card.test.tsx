import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Card />);

    expect(baseElement).toBeTruthy();
  });
});
