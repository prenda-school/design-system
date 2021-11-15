import * as React from 'react';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  describe('props.checked', () => {
    it('should appear "unchecked" when `false`', () => {
      const { getByTestId } = render(<Checkbox />);

      expect(getByTestId('CheckboxBoxIcon')).toBeTruthy();
      expect(getByTestId('CheckboxCheckIcon')).toHaveStyle(
        'transform: scale(0)'
      );
      expect(getByTestId('CheckboxDashIcon')).toHaveStyle(
        'transform: scale(0)'
      );
    });

    it('should appear "checked" when `true`', () => {
      const { getByTestId } = render(<Checkbox checked />);

      expect(getByTestId('CheckboxBoxIcon')).toBeTruthy();
      expect(getByTestId('CheckboxCheckIcon')).toHaveStyle(
        'transform: scale(1)'
      );
      expect(getByTestId('CheckboxDashIcon')).toHaveStyle(
        'transform: scale(0)'
      );
    });
  });

  describe('props.indeterminate', () => {
    it('should appear "indeterminate" when `true`', () => {
      const { getByTestId } = render(<Checkbox indeterminate />);

      expect(getByTestId('CheckboxBoxIcon')).toBeTruthy();
      expect(getByTestId('CheckboxCheckIcon')).toHaveStyle(
        'transform: scale(0)'
      );
      expect(getByTestId('CheckboxDashIcon')).toHaveStyle(
        'transform: scale(1)'
      );
    });
  });
});
