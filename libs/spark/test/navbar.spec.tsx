import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, NavBar, NavBarItem } from '../src';
import { QuestionIconDuotone } from '../src/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Router>
          <NavBar>
            <NavBarItem component={Link} to="/">
              <QuestionIconDuotone />
              <span>Dashboard</span>
            </NavBarItem>
          </NavBar>
        </Router>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
