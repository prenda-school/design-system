import { render } from '@testing-library/react';
import { SparkThemeProvider, NavBar, NavBarButton } from '../src';
import { QuestionDuotone } from '@prenda/spark-icons';

describe('NavBar', () => {
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
