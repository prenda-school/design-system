import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, NavBar, NavbarLink } from '../src';
import QuestionDuotoneIcon from '@prenda/spark-icons/QuestionDuotone';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar>
          <NavbarLink href="/">
            <QuestionDuotoneIcon />
            <span>Dashboard</span>
          </NavbarLink>
        </NavBar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
