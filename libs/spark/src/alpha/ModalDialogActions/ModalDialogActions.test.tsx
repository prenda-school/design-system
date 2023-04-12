import { render } from '@testing-library/react';
import ModalDialogActions from './ModalDialogActions';

describe('ModalDialogActions', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<ModalDialogActions />);

    expect(baseElement).toBeTruthy();
  });
});
