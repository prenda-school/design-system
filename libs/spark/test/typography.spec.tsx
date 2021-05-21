import { render } from '@testing-library/react';
import { Typography } from '../src';
import { SparkThemeProvider } from '../src/theme/Provider';
import 'jest-styled-components';

describe('Typography', () => {
  it('is truthy', () => {
    const { baseElement } = render(
    <SparkThemeProvider>
    <Typography />
    </SparkThemeProvider>
    )
    expect(baseElement).toBeTruthy();
  });
});
