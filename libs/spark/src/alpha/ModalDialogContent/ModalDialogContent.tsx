import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { StandardProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface ModalDialogContentProps
  extends StandardProps<
    HTMLAttributes<HTMLDivElement>,
    ModalDialogContentClassKey
  > {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export type ModalDialogContentClassKey = 'root';

const styles: Styles<ModalDialogContentClassKey> = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    overflowY: 'auto',
    padding: '8px 24px',
    // dialog without title
    '&:first-child': {
      paddingTop: 20,
    },
  },
};

const ModalDialogContent = forwardRef<HTMLDivElement, ModalDialogContentProps>(
  function ModalDialogContent(props, ref) {
    const { classes, className, ...other } = props;

    return (
      // @ts-expect-error ref??
      <div className={clsx(classes.root, className)} ref={ref} {...other} />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkModalDialogContent',
})(ModalDialogContent) as typeof ModalDialogContent;
