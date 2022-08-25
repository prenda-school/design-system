import { render } from '@testing-library/react';
import ListSubheader from './ListSubheader';

describe('ListSubheader', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<ListSubheader>Subheader</ListSubheader>);

    expect(baseElement).toBeTruthy();
  });
});
