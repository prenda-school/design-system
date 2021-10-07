import { render } from '@testing-library/react';
import { QuestionDuotone } from '@prenda/spark-icons';
import NavBar from './NavBar';
import NavBarButton from '../NavBarButton';
import SparkThemeProvider from '../SparkThemeProvider';

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
