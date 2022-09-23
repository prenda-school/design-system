import { HTMLAttributes, ReactNode } from 'react';
import { StandardProps } from '../utils';

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
