import { render } from 'compat-testing-library-react-17';
import Unstable_ModalDialogContent from './Unstable_ModalDialogContent';

describe('Unstable_ModalDialogContent', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_ModalDialogContent />);

    expect(baseElement).toBeTruthy();
  });
});
