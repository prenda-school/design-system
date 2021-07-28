import { render } from '@testing-library/react';
import { Typography, SparkThemeProvider } from '../src';

describe('Typography', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Typography />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
