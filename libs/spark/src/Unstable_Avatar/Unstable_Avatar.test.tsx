import { render } from '@testing-library/react';
import Unstable_Avatar from './Unstable_Avatar';

describe('Unstable_Avatar', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Avatar>A</Unstable_Avatar>);

    expect(baseElement).toBeTruthy();
  });
});
