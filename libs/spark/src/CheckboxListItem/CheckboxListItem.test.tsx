import { render } from '@testing-library/react';
import CheckboxListItem from './CheckboxListItem';

describe('CheckboxListItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <CheckboxListItem checked={false} value="value">
        Label
      </CheckboxListItem>
    );

    expect(baseElement).toBeTruthy();
  });
});
