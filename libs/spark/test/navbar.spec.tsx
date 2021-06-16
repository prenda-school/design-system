import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, Navbar, NavbarLink } from '../src';
import { QuestionIconDuotone } from '../src/icons';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Navbar>
          <NavbarLink href="/">
            <QuestionIconDuotone />
            <span>Dashboard</span>
          </NavbarLink>
        </Navbar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
