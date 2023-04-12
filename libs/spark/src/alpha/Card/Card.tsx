import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import Paper, { PaperProps } from '../Paper';
import type { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface CardTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    PaperProps & {
      orientation?: 'horizontal' | 'vertical';
    };
  defaultComponent: D;
  classKey: CardClassKey;
}

export type CardProps<
  D extends ElementType = CardTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<CardTypeMap<P, D>, D>;

export type CardClassKey = 'root';

type PrivateClassKey =
  | 'private-root-orientation-horizontal'
  | 'private-root-orientation-vertical';

const styles: Styles<CardClassKey | PrivateClassKey> = (theme) => ({
  root: {
    display: 'flex',
    padding: '32px 24px',
    [theme.breakpoints.down('sm')]: {
      padding: '24px 18px',
    },
  },
  'private-root-orientation-horizontal': {
    flexDirection: 'row',
  },
  'private-root-orientation-vertical': {
    flexDirection: 'column',
  },
});

const Card: OverridableComponent<CardTypeMap> = forwardRef(function Card(
  props,
  ref
) {
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
    <Paper
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
});

export default withStyles(styles, {
  name: 'MuiSpark_alpha_Card',
})(Card) as typeof Card;
