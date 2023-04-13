import React, { ElementType, forwardRef } from 'react';
import {
  default as MuiSwitch,
  SwitchClassKey as MuiSwitchClassKey,
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import { OverridableComponent, OverrideProps } from '../utils';

/** @deprecated */
// Add keys missing from Mui
export type SwitchClassKey = MuiSwitchClassKey | 'edgeEnd' | 'edgeStart';

/** @deprecated */
export interface SwitchTypeMap<
  P = Record<string, unknown>,
  D extends ElementType = 'div'
> {
  props: P &
    Omit<MuiSwitchProps, 'size' | 'color'> & {
      /**
       * The size of the switch.
       */
      size?: 'large' | 'small';
    };
  defaultComponent: D;
  classKey: SwitchClassKey;
}

/** @deprecated */
export type SwitchProps<
  D extends ElementType = SwitchTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<SwitchTypeMap<P, D>, D>;

/** @deprecated */
const Switch: OverridableComponent<SwitchTypeMap> = forwardRef(function Switch(
  { size: passedSize = 'small', ...other },
  ref
) {
  // Spark spec's large & small, Mui spec's medium and small => map large to medium.
  const size = passedSize === 'large' ? 'medium' : passedSize;

  return <MuiSwitch size={size} color="default" ref={ref} {...other} />;
});

export default Switch;
