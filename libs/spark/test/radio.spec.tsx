import { render } from '@testing-library/react';
import { Radio } from '../src';
import { SparkThemeProvider } from '../src/theme/Provider';
import 'jest-styled-components';


describe('Radio', () => {
  it('is truthy', () => {
     const { baseElement } = render(
     <SparkThemeProvider>
     <Radio label="test radio" />
     </SparkThemeProvider>
     )
    expect(baseElement).toBeTruthy();
  });
});


