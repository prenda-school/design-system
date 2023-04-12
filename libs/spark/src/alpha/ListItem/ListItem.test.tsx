import { render } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<ListItem>Text</ListItem>);

    expect(baseElement).toBeTruthy();
  });
});
