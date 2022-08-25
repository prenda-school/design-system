import { render } from '@testing-library/react';
import AvatarButton from './AvatarButton';

describe('AvatarButton', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<AvatarButton>A</AvatarButton>);

    expect(baseElement).toBeTruthy();
  });
});
