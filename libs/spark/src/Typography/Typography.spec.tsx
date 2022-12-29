import { render } from 'compat-testing-library-react-17';
import SparkThemeProvider from '../SparkThemeProvider';
import Typography from './Typography';

describe('Typography', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Typography />
      </SparkThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
