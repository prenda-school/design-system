import { render } from '@testing-library/react';
import {
  SparkThemeProvider,
  DropdownContext,
  DropdownAnchor,
  DropdownMenu,
} from '../src';

describe('Dropdown', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <DropdownContext>
          <DropdownAnchor />
          <DropdownMenu />
        </DropdownContext>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
