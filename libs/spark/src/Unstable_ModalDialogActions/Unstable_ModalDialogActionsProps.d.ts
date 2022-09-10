import { HTMLAttributes, ReactNode } from 'react';
import { StandardProps } from '../utils';

export interface Unstable_ModalDialogActionsProps
  extends StandardProps<
    HTMLAttributes<HTMLDivElement>,
    Unstable_ModalDialogActionsClassKey
  > {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export type Unstable_ModalDialogActionsClassKey = 'root';
