import { render } from '@testing-library/react';
import ModalDialogContent from './ModalDialogContent';

describe('ModalDialogContent', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<ModalDialogContent />);

    expect(baseElement).toBeTruthy();
  });
});
