import { render } from '@testing-library/react';
import ModalDialogContentText from './ModalDialogContentText';

describe('ModalDialogContentText', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <ModalDialogContentText>Paragraph</ModalDialogContentText>
    );

    expect(baseElement).toBeTruthy();
  });
});
