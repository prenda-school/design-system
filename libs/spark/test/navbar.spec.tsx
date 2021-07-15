import { render } from '@testing-library/react';
import 'jest-styled-components';

import { SparkThemeProvider, NavBar, NavBarButton } from '../src';
import { QuestionIconDuotone } from '../src/icons';


describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar>
          <NavBarButton href="/" startIcon={<QuestionIconDuotone />}>
            Dashboard
          </NavBarButton>
        </NavBar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
