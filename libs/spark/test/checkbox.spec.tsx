import { render } from '@testing-library/react';
import { Checkbox } from '../src/form-inputs/checkbox';
import 'jest-styled-components';
import { SparkThemeProvider } from '../src/theme/Provider';

describe('Checkbox', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Checkbox label="test label" />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
