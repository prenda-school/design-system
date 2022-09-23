import { render } from '@testing-library/react';
import Unstable_ModalDialog from './Unstable_ModalDialog';

describe('Unstable_ModalDialog', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_ModalDialog open />);

    expect(baseElement).toBeTruthy();
  });
});
