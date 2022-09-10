import { HTMLAttributes, ReactNode } from 'react';
import { Unstable_TypographyProps } from '../Unstable_Typography';
import { StandardProps } from '../utils';

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
