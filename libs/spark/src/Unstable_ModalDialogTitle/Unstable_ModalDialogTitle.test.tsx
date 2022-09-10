import { render } from '@testing-library/react';
import Unstable_ModalDialogTitle from './Unstable_ModalDialogTitle';

describe('Unstable_ModalDialogTitle', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_ModalDialogTitle>Title</Unstable_ModalDialogTitle>
    );

    expect(baseElement).toBeTruthy();
  });
});
