import { render } from '@testing-library/react';

import Tokens from './tokens';

describe('Tokens', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tokens />);
    expect(baseElement).toBeTruthy();
  });
});
