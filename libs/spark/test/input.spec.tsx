import { render } from '@testing-library/react';
import { Input } from '../src';
import { SparkThemeProvider } from '../src/theme/Provider';
import 'jest-styled-components';

describe('Input', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Input />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
