import * as React from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StandardProps } from '../utils';
import Unstable_Typography from '../Unstable_Typography';

export interface Unstable_SectionMessageTitleProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement>,
    Unstable_SectionMessageTitleClassKey
  > {
  /**
   * The content of the component.
   */
  title?: string;
}

export type Unstable_SectionMessageTitleClassKey = 'root';

const useStyles = makeStyles(
  () => ({
    root: () => ({ marginBottom: 4 }),
  }),
  { name: 'MuiSparkUnstable_SectionMessageTitle' }
);

const Unstable_SectionMessageTitle = React.forwardRef(
  function Unstable_SectionMessageTitle(
    props: Unstable_SectionMessageTitleProps,
    ref
  ) {
    const { title, className, ...other } = props;

    const classes = useStyles();

    return (
      <span className="pos-3">
        <div
          ref={ref}
          className={clsx(classes.root, className)}
          {...other}
        >
          {title}
        </Unstable_Typography>
      </span>
    );
  }
);

export default Unstable_SectionMessageTitle;
