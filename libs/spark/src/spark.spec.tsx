import { render } from '@testing-library/react';

import Spark from './spark';

describe('Spark', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spark />);
    expect(baseElement).toBeTruthy();
  });
});
