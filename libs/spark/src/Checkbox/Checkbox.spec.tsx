import React from 'react';
import { render } from 'compat-testing-library-react-17';
import Checkbox from './Checkbox';
import SparkThemeProvider from '../SparkThemeProvider';

describe('<Checkbox />', () => {
  describe('props.checked', () => {
    it('should appear "unchecked" when `false`', () => {
      const { getByTestId } = render(
        <SparkThemeProvider>
          <Checkbox />
        </SparkThemeProvider>
      );

      expect(getByTestId('CheckboxBoxIcon')).toBeTruthy();
      expect(getByTestId('CheckboxCheckIcon')).toHaveStyle(
        'transform: scale(0)'
      );
      expect(getByTestId('CheckboxDashIcon')).toHaveStyle(
        'transform: scale(0)'
      );
    });

    it('should appear "checked" when `true`', () => {
      const { getByTestId } = render(
        <SparkThemeProvider>
          <Checkbox checked />
        </SparkThemeProvider>
      );

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
      const { getByTestId } = render(
        <SparkThemeProvider>
          <Checkbox indeterminate />
        </SparkThemeProvider>
      );

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
