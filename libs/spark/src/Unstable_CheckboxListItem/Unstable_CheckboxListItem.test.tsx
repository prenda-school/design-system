import { render } from '@testing-library/react';
import Unstable_CheckboxListItem from './Unstable_CheckboxListItem';

describe('Unstable_CheckboxListItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_CheckboxListItem checked={false} value="value">
        Label
      </Unstable_CheckboxListItem>
    );

    expect(baseElement).toBeTruthy();
  });
});
