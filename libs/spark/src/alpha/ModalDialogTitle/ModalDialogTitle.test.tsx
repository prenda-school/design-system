import { render } from '@testing-library/react';
import ModalDialogTitle from './ModalDialogTitle';

describe('ModalDialogTitle', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<ModalDialogTitle>Title</ModalDialogTitle>);

    expect(baseElement).toBeTruthy();
  });
});
