import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Radio, SparkThemeProvider } from '../src';

describe('Radio', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Radio label="test radio" />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
