import { render } from '@testing-library/react';
import type { CheckboxListItemProps } from './CheckboxListItem';
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

  // This is a type test, not runtime
  it.skip('Has replaced `onClick` prop', () => {
    const handleClick: CheckboxListItemProps['onClick'] = (
      _e,
      value,
      checked
    ) => {
      return;
    };

    <CheckboxListItem onClick={handleClick} checked={false} value="value">
      Label
    </CheckboxListItem>;
  });
});
