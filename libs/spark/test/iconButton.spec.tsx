import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, IconButton } from '../src';

describe('IconButton', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <IconButton />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
