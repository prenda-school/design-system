import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Input, SparkThemeProvider } from '../src';

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
