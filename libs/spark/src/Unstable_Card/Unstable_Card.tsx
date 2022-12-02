import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import Unstable_Paper, { Unstable_PaperProps } from '../Unstable_Paper';
import type { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_CardTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Unstable_PaperProps & {
      orientation?: 'horizontal' | 'vertical';
    };
  defaultComponent: D;
  classKey: Unstable_CardClassKey;
}

export type Unstable_CardProps<
  D extends ElementType = Unstable_CardTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_CardTypeMap<P, D>, D>;

export type Unstable_CardClassKey = 'root';

type PrivateClassKey =
  | 'private-root-orientation-horizontal'
  | 'private-root-orientation-vertical';

const styles: Styles<Unstable_CardClassKey | PrivateClassKey> = {
  root: {
    display: 'flex',
    padding: '32px 24px',
  },
  'private-root-orientation-horizontal': {
    flexDirection: 'row',
  },
  'private-root-orientation-vertical': {
    flexDirection: 'column',
  },
};

const Unstable_Card: OverridableComponent<Unstable_CardTypeMap> = forwardRef(
  function Unstable_Card(props, ref) {
    const {
      className,
      classes,
      bgcolor = 'default',
      border = 'standard',
      orientation = 'vertical',
      radius = 'md',
      shadow = 'none',
      ...other
    } = props;

    return (
      <Unstable_Paper
        className={clsx(
          classes.root,
          classes[`private-root-orientation-${orientation}`],
          className
        )}
        bgcolor={bgcolor}
        border={border}
        radius={radius}
        ref={ref}
        shadow={shadow}
        {...other}
      />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_Card',
})(Unstable_Card) as typeof Unstable_Card;
