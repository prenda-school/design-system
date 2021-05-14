import { render } from '@testing-library/react';
import { IconButton } from '../src';
import 'jest-styled-components';
import { SparkThemeProvider } from '../src/theme/Provider'

describe('IconButton', () => {
  it('is truthy', () => {
    const { baseElement } = render(<SparkThemeProvider><IconButton /></SparkThemeProvider>)
    expect(baseElement).toBeTruthy();
  });
});
