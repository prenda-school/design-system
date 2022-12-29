import { render } from 'compat-testing-library-react-17';
import Unstable_AvatarButton from './Unstable_AvatarButton';

describe('Unstable_AvatarButton', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_AvatarButton>A</Unstable_AvatarButton>
    );

    expect(baseElement).toBeTruthy();
  });
});
