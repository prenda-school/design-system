import { render } from '@testing-library/react';
import createSvgIcon_unstable from './createSvgIcon_unstable';

describe('createSvgIcon_unstable', () => {
  it('Can return without ThemeProvider', () => {
    const Icon = createSvgIcon_unstable(<path d="M0" />, 'Dot');

    expect(Icon).toBeTruthy();
  });

  it('Can accept custom viewBox, width, height', () => {
    const viewBox = '0 0 22 26';
    const width = '22';
    const height = '26';
    const Icon = createSvgIcon_unstable(
      <path d="M0" />,
      'Dot',
      viewBox,
      width,
      height
    );
    const { getByTestId } = render(<Icon />);

    const component = getByTestId('DotIcon');
    expect(component.getAttribute('viewBox')).toBe(viewBox);
    expect(component.getAttribute('width')).toBe(width);
    expect(component.getAttribute('height')).toBe(height);
  });
});
