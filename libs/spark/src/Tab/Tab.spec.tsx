import { render } from '@testing-library/react';
import Tab from './Tab';

describe('Tab', () => {
  it('renders', () => {
    const { baseElement } = render(<Tab />);

    expect(baseElement).toBeTruthy();
  });
});
