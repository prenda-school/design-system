import { render } from '@testing-library/react';
import { MenuItem, SparkThemeProvider } from '../src';

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
