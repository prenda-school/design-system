import * as React from 'react';
import { render } from '@testing-library/react';
import Radio from './Radio';

describe('<Radio />', () => {
  describe('props.checked', () => {
    it('should appear "unchecked" when `false`', () => {
      const { getByTestId } = render(<Radio />);

      expect(getByTestId('RadioCircleIcon')).toBeTruthy();
      expect(getByTestId('RadioDotIcon')).toHaveStyle('transform: scale(0)');
    });

    it('should appear "checked" when `true`', () => {
      const { getByTestId } = render(<Radio checked />);

      expect(getByTestId('RadioCircleIcon')).toBeTruthy();
      expect(getByTestId('RadioDotIcon')).not.toHaveStyle(
        'transform: scale(1)'
      );
    });
  });
});
