import * as React from 'react';
import { render } from 'compat-testing-library-react-17';
import { stub } from 'sinon';
import withStyles from './withStyles';
import initialTheme from '../theme/initialTheme';

describe('withStyles', () => {
  const Empty = () => <div />;

  it("should supply Spark's theme by default", () => {
    const styles = stub().returns({});
    const StyledComponent = withStyles(styles)(Empty);

    render(<StyledComponent />);

    expect(styles.args[0][0]).toEqual(initialTheme);
  });
});
