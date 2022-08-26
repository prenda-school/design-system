import React from 'react';
import { render } from '@testing-library/react';
import Radio from './Radio';
import SparkThemeProvider from '../SparkThemeProvider';

describe('<Radio />', () => {
  describe('props.checked', () => {
    it('should appear "unchecked" when `false`', () => {
      const { getByTestId } = render(
        <SparkThemeProvider>
          <Radio />
        </SparkThemeProvider>
      );

      expect(getByTestId('RadioCircleIcon')).toBeTruthy();
      expect(getByTestId('RadioDotIcon')).toHaveStyle('transform: scale(0)');
    });

    it('should appear "checked" when `true`', () => {
      const { getByTestId } = render(
        <SparkThemeProvider>
          <Radio checked />
        </SparkThemeProvider>
      );

      expect(getByTestId('RadioCircleIcon')).toBeTruthy();
      expect(getByTestId('RadioDotIcon')).toHaveStyle('transform: scale(1)');
    });
  });
});
