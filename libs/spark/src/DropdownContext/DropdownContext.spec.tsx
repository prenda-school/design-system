import { render } from '@testing-library/react';
import DropdownContext from './DropdownContext';

describe('DropdownContext', () => {
  it('is truthy', () => {
    const { baseElement } = render(<DropdownContext />);

    expect(baseElement).toBeTruthy();
  });
});
