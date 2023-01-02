import { render } from 'compat-testing-library-react-17';
import DropdownContext from './DropdownContext';

describe('DropdownContext', () => {
  it('is truthy', () => {
    const { baseElement } = render(<DropdownContext />);

    expect(baseElement).toBeTruthy();
  });
});
