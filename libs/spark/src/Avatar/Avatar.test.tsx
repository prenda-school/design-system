import { render } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Avatar>A</Avatar>);

    expect(baseElement).toBeTruthy();
  });
});
