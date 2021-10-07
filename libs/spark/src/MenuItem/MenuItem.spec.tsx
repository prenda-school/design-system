import { render } from '@testing-library/react';
import MenuItem from './MenuItem';
import SparkThemeProvider from '../SparkThemeProvider';

describe('Input', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <MenuItem />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
