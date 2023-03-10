import { render } from '@testing-library/react';
import Unstable_Dropdown from './Unstable_Dropdown';

describe('Unstable_Dropdown', () => {
  it('is truthy', () => {
    const { baseElement } = render(<Unstable_Dropdown />);

    expect(baseElement).toBeTruthy();
  });
});
