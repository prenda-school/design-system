import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, NavBar, NavBarButton } from '../src';
import QuestionDuotone from '@prenda/spark-icons/QuestionDuotone';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar>
          <NavBarButton href="/" startIcon={<QuestionDuotone />}>
            Dashboard
          </NavBarButton>
        </NavBar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
