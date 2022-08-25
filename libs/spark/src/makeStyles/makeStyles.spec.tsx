import { render } from '@testing-library/react';
import React from 'react';
import { stub } from 'sinon';
import makeStyles from './makeStyles';
import theme from '../theme';

describe('makeStyles', () => {
  it('should supply custom theme by default', () => {
    const styles = stub().returns({ root: {} });

    const useStyles = makeStyles(styles);
    const StyledComponent = () => {
      const classes = useStyles();
      return <div className={classes.root} />;
    };

    render(<StyledComponent />);

    expect(styles.args[0][0]).toEqual(theme);
  });
});
