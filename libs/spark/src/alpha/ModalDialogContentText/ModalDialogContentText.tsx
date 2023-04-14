import type { ElementType} from 'react';
import React, { forwardRef } from 'react';
import type { TypographyTypeMap } from '../Typography';
import Typography from '../Typography';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface ModalDialogContentTextTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = TypographyTypeMap['defaultComponent']
> {
  props: P & TypographyTypeMap['props'];
  defaultComponent: D;
  classKey: ModalDialogContentTextClassKey;
}

export type ModalDialogContentTextProps<
  D extends ElementType = ModalDialogContentTextTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<ModalDialogContentTextTypeMap<P, D>, D>;

export type ModalDialogContentTextClassKey = 'root';

const styles: Styles<ModalDialogContentTextClassKey> = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12,
  },
};

const ModalDialogContentText: OverridableComponent<ModalDialogContentTextTypeMap> =
  forwardRef(function ModalDialogContentText(props, ref) {
    return (
      // @ts-expect-error ref??
      <Typography component="p" variant="body" ref={ref} {...props} />
    );
  });

export default withStyles(styles, {
  name: 'MuiSpark_alpha_ModalDialogContentText',
})(ModalDialogContentText) as typeof ModalDialogContentText;
