import { render } from 'compat-testing-library-react-17';
import Unstable_ToastsProvider from './Unstable_ToastsProvider';

describe('Unstable_ToastsProvider', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_ToastsProvider>
        <div />
      </Unstable_ToastsProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
