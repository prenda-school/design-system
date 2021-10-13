import * as React from 'react';
import { render } from '@testing-library/react';
import { stub } from 'sinon';
import makeStyles from './makeStyles';
import initialTheme from '../theme/initialTheme';

describe('styled', () => {
  it("should supply Spark's theme by default", () => {
    const styles = stub().returns({ root: {} });

    const useStyles = makeStyles(styles);
    const StyledComponent = () => {
      const classes = useStyles();
      return <div className={classes.root} />;
    };

    render(<StyledComponent />);

    expect(styles.args[0][0]).toEqual(initialTheme);
  });
});
