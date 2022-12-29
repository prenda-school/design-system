import { render } from 'compat-testing-library-react-17';
import Unstable_Subheader from './Unstable_ListSubheader';

describe('Unstable_Subheader', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Subheader>Subheader</Unstable_Subheader>
    );

    expect(baseElement).toBeTruthy();
  });
});
