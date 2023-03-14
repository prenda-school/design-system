import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import { buildVariant } from '../theme/typography';
import useFormControl_unstable from '../useFormControl_unstable';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_InputAdornmentTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P & {
    /**
     * The position of the adornment in the Input element.
     */
    position: 'start' | 'end';
    /**
     * The size of the adornment.
     */
    size?: 'medium' | 'small';
  };
  defaultComponent: D;
  classKey: Unstable_InputAdornmentClassKey;
}

export type Unstable_InputAdornmentProps<
  D extends ElementType = Unstable_InputAdornmentTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_InputAdornmentTypeMap<P, D>, D>;

export type Unstable_InputAdornmentClassKey = 'root';

type PrivateClassKey =
  | 'private-root-position-start'
  | 'private-root-position-end'
  | 'private-root-size-medium'
  | 'private-root-size-small'
  | 'private-root-size-medium-children-string'
  | 'private-root-size-small-children-string';

const sizeSmallVariant = buildVariant(
  400,
  14,
  16,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

const styles: Styles<Unstable_InputAdornmentClassKey | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {
    /* from Mui */
    display: 'flex',
    alignItems: 'flex-start',
    whiteSpace: 'nowrap',
    /* for PDS */
    fontSize: theme.unstable_typography.pxToRem(24),
    lineHeight: 1,
    alignSelf: 'flex-start', // un-center in multiline input
  },
  'private-root-position-start': {
    marginRight: 2,
  },
  'private-root-position-end': {
    marginLeft: 2,
  },
  'private-root-size-medium': {
    fontSize: theme.unstable_typography.pxToRem(24),
    marginTop: 12, // shift-down in multiline input (= half of typical icon height + input top margin)
  },
  'private-root-size-small': {
    fontSize: theme.unstable_typography.pxToRem(20),
    marginTop: 8,
  },
  'private-root-size-medium-children-string': {
    ...theme.unstable_typography.body,
  },
  'private-root-size-small-children-string': {
    ...sizeSmallVariant,
  },
});

const Unstable_InputAdornment: OverridableComponent<Unstable_InputAdornmentTypeMap> =
  forwardRef(function Unstable_InputAdornment(props, ref) {
    const {
      children,
      classes,
      className,
      // @ts-expect-error prop does not exist :/
      component: Component = 'div',
      position,
      size: _size,
      ...other
    } = props;

    const formControl = useFormControl_unstable(props);

    return (
      <Component
        className={clsx(
          classes.root,
          classes[`private-root-position-${position}`],
          classes[`private-root-size-${formControl.size}`],
          {
            [classes[`private-root-size-${formControl.size}-children-string`]]:
              typeof props.children === 'string',
          },
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </Component>
    );
  });

export default withStyles(styles, { name: 'MuiSparkUnstable_InputAdornment' })(
  Unstable_InputAdornment
) as typeof Unstable_InputAdornment;
