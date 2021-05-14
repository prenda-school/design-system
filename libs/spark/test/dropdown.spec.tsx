import { render } from '@testing-library/react';
import { SparkThemeProvider } from '../src/theme/Provider'
import {
  DropdownContext,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  DropdownDivider,
} from '../src';

describe('DropdownContext', () => {
  it('is truthy', () => {
    const { baseElement } = render(<SparkThemeProvider><DropdownContext /></SparkThemeProvider>)
    expect(baseElement).toBeTruthy();
  });
});

describe('DropdownButton', () => {
  it('is truthy', () => {
    const { baseElement } = render(<SparkThemeProvider><DropdownButton /></SparkThemeProvider>)
    expect(baseElement).toBeTruthy();
  });
});
describe('DropdownMenu', () => {
  it('is truthy', () => {
    const { baseElement } = render(<SparkThemeProvider><DropdownMenu /></SparkThemeProvider>)
    expect(baseElement).toBeTruthy();
  });
});
describe('DropdownMenuItem', () => {
  it('is truthy', () => {
    const { baseElement } = render(<SparkThemeProvider><DropdownMenuItem /></SparkThemeProvider>)
    expect(baseElement).toBeTruthy();
  });
});
describe('DropdownDivider', () => {
  it('is truthy', () => {
    const { baseElement } = render(<SparkThemeProvider><DropdownDivider /></SparkThemeProvider>)
    expect(baseElement).toBeTruthy();
  });
});
