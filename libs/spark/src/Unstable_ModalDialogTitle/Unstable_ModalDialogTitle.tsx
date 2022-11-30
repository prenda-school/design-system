import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import Unstable_Typography, {
  Unstable_TypographyProps,
} from '../Unstable_Typography';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_ModalDialogTitleProps
  extends StandardProps<
    HTMLAttributes<HTMLDivElement>,
    Unstable_ModalDialogTitleClassKey
  > {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Props applied to the `Typography` element.
   */
  TypographyProps?: Unstable_TypographyProps;
}

export type Unstable_ModalDialogTitleClassKey = 'root';

const styles: Styles<Unstable_ModalDialogTitleClassKey> = {
  /* Styles applied to the root element. */
  root: {
    flex: '0 0 auto',
    margin: 0,
    padding: '24px 24px 8px 24px',
    // dialog with close button
    '&:not(:first-child)': {
      paddingRight: 68,
    },
  },
};

const Unstable_ModalDialogTitle = forwardRef<
  HTMLDivElement,
  Unstable_ModalDialogTitleProps
>(function Unstable_ModalDialogTitle(props, ref) {
  const { children, classes, className, TypographyProps, ...other } = props;

  return (
    // @ts-expect-error ref??
    <div className={clsx(classes.root, className)} ref={ref} {...other}>
      {/* @ts-expect-error component?? */}
      <Unstable_Typography component="h2" variant="T22" {...TypographyProps}>
        {children}
      </Unstable_Typography>
    </div>
  );
});

export default withStyles(styles, {
  name: 'MuiSparkUnstable_ModalDialogTitle',
})(Unstable_ModalDialogTitle) as typeof Unstable_ModalDialogTitle;
