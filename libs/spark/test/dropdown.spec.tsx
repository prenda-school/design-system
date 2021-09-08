import { render } from '@testing-library/react';
import {
  SparkThemeProvider,
  DropdownContext,
  DropdownButton,
  DropdownMenu,
} from '../src';

describe('DropdownContext', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <DropdownContext />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});

describe('DropdownButton', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <DropdownButton />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
describe('DropdownMenu', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <DropdownMenu />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
