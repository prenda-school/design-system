import { render } from '@testing-library/react';
import Unstable_Link from './Unstable_Link';

describe('Unstable_Link', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Link>Text</Unstable_Link>);

    expect(baseElement).toBeTruthy();
  });
});
