import React, { forwardRef } from 'react';
import Unstable_Typography from '../Unstable_Typography';
import { OverridableComponent } from '../utils';
import withStyles, { Styles } from '../withStyles';
import {
  Unstable_ModalDialogContentTextClassKey,
  Unstable_ModalDialogContentTextTypeMap,
} from './Unstable_ModalDialogContentTextProps';

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
