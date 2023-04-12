import { render } from '@testing-library/react';
import Link from './Link';

describe('Link', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Link>Text</Link>);

    expect(baseElement).toBeTruthy();
  });
});
