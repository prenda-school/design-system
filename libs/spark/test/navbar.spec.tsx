import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, NavBar, NavbarLink } from '../src';
import { QuestionIconDuotone } from '../src/icons';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar>
          <NavbarLink href="/">
            <QuestionIconDuotone />
            <span>Dashboard</span>
          </NavbarLink>
        </NavBar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
