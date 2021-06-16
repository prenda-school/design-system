import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  SparkThemeProvider,
  Navbar,
  NavbarLink,
  QuestionCircleIcon,
} from '../src';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Navbar>
          <NavbarLink href="/">
            <QuestionCircleIcon fontSize="large" color="navy" contrast="low" />
            <span>Dashboard</span>
          </NavbarLink>
        </Navbar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
