import { render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('renders', () => {
    const { baseElement } = render(<Typography />);

    expect(baseElement).toBeTruthy();
  });
});
