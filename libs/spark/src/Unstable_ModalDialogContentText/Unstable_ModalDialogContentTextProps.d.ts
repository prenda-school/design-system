import { ElementType } from 'react';
import { Unstable_TypographyTypeMap } from '../Unstable_Typography';

export interface Unstable_ModalDialogContentTextTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = Unstable_TypographyTypeMap['defaultComponent']
> {
  props: P & Unstable_TypographyTypeMap['props'];
  defaultComponent: D;
  classKey: Unstable_ModalDialogContentTextClassKey;
}

export type Unstable_ModalDialogContentTextClassKey = 'root';
