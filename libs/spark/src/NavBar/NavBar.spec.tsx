import { render } from '@testing-library/react';
import NavBar from './NavBar';
import SparkThemeProvider from '../SparkThemeProvider';

describe('NavBar', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar />
      </SparkThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
