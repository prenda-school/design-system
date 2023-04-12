import { render } from '@testing-library/react';
import Subheader from './ListSubheader';

describe('Subheader', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Subheader>Subheader</Subheader>);

    expect(baseElement).toBeTruthy();
  });
});
