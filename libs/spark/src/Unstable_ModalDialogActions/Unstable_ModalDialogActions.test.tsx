import { render } from 'compat-testing-library-react-17';
import Unstable_ModalDialogActions from './Unstable_ModalDialogActions';

describe('Unstable_ModalDialogActions', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_ModalDialogActions />);

    expect(baseElement).toBeTruthy();
  });
});
