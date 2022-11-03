import React, { ElementType, forwardRef } from 'react';
import Unstable_Typography, {
  Unstable_TypographyTypeMap,
} from '../Unstable_Typography';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_ModalDialogContentTextTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = Unstable_TypographyTypeMap['defaultComponent']
> {
  props: P & Unstable_TypographyTypeMap['props'];
  defaultComponent: D;
  classKey: Unstable_ModalDialogContentTextClassKey;
}

export type Unstable_ModalDialogContentTextProps<
  D extends ElementType = Unstable_ModalDialogContentTextTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_ModalDialogContentTextTypeMap<P, D>, D>;

export type Unstable_ModalDialogContentTextClassKey = 'root';

const styles: Styles<Unstable_ModalDialogContentTextClassKey> = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12,
  },
};

const Unstable_ModalDialogContentText: OverridableComponent<Unstable_ModalDialogContentTextTypeMap> = forwardRef(
  function Unstable_ModalDialogContentText(props, ref) {
    return (
      // @ts-expect-error ref??
      <Unstable_Typography component="p" variant="body" ref={ref} {...props} />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_ModalDialogContentText',
})(Unstable_ModalDialogContentText) as typeof Unstable_ModalDialogContentText;
