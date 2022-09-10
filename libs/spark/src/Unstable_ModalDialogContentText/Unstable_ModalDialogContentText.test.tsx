import { render } from '@testing-library/react';
import Unstable_ModalDialogContentText from './Unstable_ModalDialogContentText';

describe('Unstable_ModalDialogContentText', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_ModalDialogContentText>
        Paragraph
      </Unstable_ModalDialogContentText>
    );

    expect(baseElement).toBeTruthy();
  });
});
