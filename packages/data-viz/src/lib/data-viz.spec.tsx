import { render } from '@testing-library/react';

import DataViz from './data-viz';

describe('DataViz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataViz />);
    expect(baseElement).toBeTruthy();
  });
});
