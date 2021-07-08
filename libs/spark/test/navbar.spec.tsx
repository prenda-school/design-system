import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, NavBar, NavBarItem } from '../src';
import { QuestionIconDuotone } from '../src/icons';
import { Link } from 'react-router-dom';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar>
          <NavBarItem component={Link} to="/">
            <QuestionIconDuotone />
            <span>Dashboard</span>
          </NavBarItem>
        </NavBar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
