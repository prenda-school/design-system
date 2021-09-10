import { render } from '@testing-library/react';
import {
  SparkThemeProvider,
  DropdownContext,
  DropdownButton,
  DropdownMenu,
} from '../src';

describe('Dropdown', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <DropdownContext>
          <DropdownButton />
          <DropdownMenu />
        </DropdownContext>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
