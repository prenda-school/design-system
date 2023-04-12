import { render } from '@testing-library/react';
import ModalDialog from './ModalDialog';

describe('ModalDialog', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<ModalDialog open />);

    expect(baseElement).toBeTruthy();
  });
});
