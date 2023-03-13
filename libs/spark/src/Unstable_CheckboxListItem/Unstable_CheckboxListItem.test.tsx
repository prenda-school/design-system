import { render } from '@testing-library/react';
import Unstable_CheckboxListItem, {
  Unstable_CheckboxListItemProps,
} from './Unstable_CheckboxListItem';

describe('Unstable_CheckboxListItem', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_CheckboxListItem checked={false} value="value">
        Label
      </Unstable_CheckboxListItem>
    );

    expect(baseElement).toBeTruthy();
  });

  // This is a type test, not runtime
  it.skip('Has replaced `onClick` prop', () => {
    const handleClick: Unstable_CheckboxListItemProps['onClick'] = (
      _e,
      value,
      checked
    ) => {
      return;
    };

    <Unstable_CheckboxListItem
      onClick={handleClick}
      checked={false}
      value="value"
    >
      Label
    </Unstable_CheckboxListItem>;
  });
});
