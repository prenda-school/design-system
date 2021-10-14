import { render } from '@testing-library/react';
import Tag from './Tag';

describe('Tag', () => {
  it('renders', () => {
    const { baseElement } = render(<Tag />);

    expect(baseElement).toBeTruthy();
  });
});
