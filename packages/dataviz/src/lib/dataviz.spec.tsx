import { render } from '@testing-library/react';

import Dataviz from './dataviz';

describe('Dataviz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dataviz />);
    expect(baseElement).toBeTruthy();
  });
});
