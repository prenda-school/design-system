import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, Checkbox } from '../src';

describe('Checkbox', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Checkbox label="test label" />
      </SparkThemeProvider>
    )
    expect(baseElement).toBeTruthy();
  });
});
