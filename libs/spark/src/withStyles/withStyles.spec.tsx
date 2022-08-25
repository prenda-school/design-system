import { render } from '@testing-library/react';
import * as React from 'react';
import { stub } from 'sinon';
import withStyles from './withStyles';
import theme from '../theme';

describe('withStyles', () => {
  const Empty = () => <div />;

  it('should supply custom theme by default', () => {
    const styles = stub().returns({});
    const StyledComponent = withStyles(styles)(Empty);

    render(<StyledComponent />);

    expect(styles.args[0][0]).toEqual(theme);
  });
});
