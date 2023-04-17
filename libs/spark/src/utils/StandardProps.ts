import type { CSSProperties, Ref } from 'react';
import type { StyledComponentProps } from '../withStyles';

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 * Credit to https://github.com/mui-org/material-ui/blob/c545ccab7edfdf4a44d4ec2f4bf10ebc7fd00259/packages/material-ui/src/index.d.ts
 */
export type StandardProps<
  C,
  ClassKey extends string,
  Removals extends keyof C = never
> = Omit<C, 'classes' | Removals> &
  StyledComponentProps<ClassKey> & {
    className?: string;
    ref?: C extends { ref?: infer RefType } ? RefType : Ref<unknown>;
    style?: CSSProperties;
  };
