import { render } from 'compat-testing-library-react-17';
import IconButton from './IconButton';
import SparkThemeProvider from '../SparkThemeProvider';

describe('IconButton', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <IconButton />
      </SparkThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
