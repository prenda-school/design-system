import { render } from '@testing-library/react';
import DropdownAnchor from '../DropdownAnchor';
import DropdownContext from './DropdownContext';
import DropdownMenu from '../DropdownMenu';
import SparkThemeProvider from '../SparkThemeProvider';

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
