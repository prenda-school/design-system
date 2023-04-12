import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('is truthy', () => {
    const { baseElement } = render(<Dropdown />);

    expect(baseElement).toBeTruthy();
  });
});
