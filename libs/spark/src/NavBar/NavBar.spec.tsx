import { render } from 'compat-testing-library-react-17';
import NavBar from './NavBar';
import SparkThemeProvider from '../SparkThemeProvider';

describe('NavBar', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar />
      </SparkThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
