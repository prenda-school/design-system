import { render } from '@testing-library/react';
import ContentGroup from './ContentGroup';

describe('ContentGroup', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<ContentGroup>Text</ContentGroup>);

    expect(baseElement).toBeTruthy();
  });
});
