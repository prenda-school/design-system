import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_ModalDialogContentProps
  extends StandardProps<
    HTMLAttributes<HTMLDivElement>,
    Unstable_ModalDialogContentClassKey
  > {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export type Unstable_ModalDialogContentClassKey = 'root';

const styles: Styles<Unstable_ModalDialogContentClassKey> = {
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

const Unstable_ModalDialogContent = forwardRef<
  HTMLDivElement,
  Unstable_ModalDialogContentProps
>(function Unstable_ModalDialogContent(props, ref) {
  const { classes, className, ...other } = props;

  return (
    // @ts-expect-error ref??
    <div className={clsx(classes.root, className)} ref={ref} {...other} />
  );
});

export default withStyles(styles, {
  name: 'MuiSparkUnstable_ModalDialogContent',
})(Unstable_ModalDialogContent) as typeof Unstable_ModalDialogContent;
