import { render } from '@testing-library/react';
import Tag from './Tag';

describe('Tag', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Tag label="Label" />);

    expect(baseElement).toBeTruthy();
  });
});
