import { render } from '@testing-library/react';
import IconButton from './IconButton';
import SparkThemeProvider from '../SparkThemeProvider';

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
