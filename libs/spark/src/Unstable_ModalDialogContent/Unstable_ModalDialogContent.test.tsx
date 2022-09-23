import { render } from '@testing-library/react';
import Unstable_ModalDialogContent from './Unstable_ModalDialogContent';

describe('Unstable_ModalDialogContent', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_ModalDialogContent />);

    expect(baseElement).toBeTruthy();
  });
});
