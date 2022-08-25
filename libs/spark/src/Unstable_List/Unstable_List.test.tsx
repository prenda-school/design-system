import { render } from '@testing-library/react';
import Unstable_List from './Unstable_List';

describe('Unstable_List', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_List />);

    expect(baseElement).toBeTruthy();
  });
});
