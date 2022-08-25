import { render } from '@testing-library/react';
import Unstable_ListItem from './Unstable_ListItem';

describe('Unstable_ListItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_ListItem>Text</Unstable_ListItem>);

    expect(baseElement).toBeTruthy();
  });
});
