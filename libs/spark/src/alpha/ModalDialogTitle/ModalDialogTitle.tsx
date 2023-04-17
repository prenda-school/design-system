import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import type { TypographyProps } from '../Typography';
import Typography from '../Typography';
import type { StandardProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface ModalDialogTitleProps
  extends StandardProps<
    HTMLAttributes<HTMLDivElement>,
    ModalDialogTitleClassKey
  > {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Props applied to the `Typography` element.
   */
  TypographyProps?: TypographyProps;
}

export type ModalDialogTitleClassKey = 'root';

const styles: Styles<ModalDialogTitleClassKey> = {
  /* Styles applied to the root element. */
  root: {
    flex: '0 0 auto',
    margin: 0,
    padding: '28px 24px 8px 24px',
    // dialog with close button
    '&:not(:first-child)': {
      paddingRight: 68,
    },
  },
};

const ModalDialogTitle = forwardRef<HTMLDivElement, ModalDialogTitleProps>(
  function ModalDialogTitle(props, ref) {
    const { children, classes, className, TypographyProps, ...other } = props;

    return (
      // @ts-expect-error ref??
      <div className={clsx(classes.root, className)} ref={ref} {...other}>
        {/* @ts-expect-error component?? */}
        <Typography component="h2" variant="T22" {...TypographyProps}>
          {children}
        </Typography>
      </div>
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSpark_alpha_ModalDialogTitle',
})(ModalDialogTitle) as typeof ModalDialogTitle;
