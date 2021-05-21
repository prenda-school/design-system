import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider } from '../src/theme/Provider';
import { Button } from '../src/';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Button />
      </SparkThemeProvider> 
    )
    expect(baseElement).toBeTruthy();
  });
});
