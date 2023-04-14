import clsx from 'clsx';
import type { ElementType} from 'react';
import React, { forwardRef } from 'react';
import { buildVariant } from '../theme/typography';
import type { FormControlProperties } from '../useFormControl';
import useFormControl from '../useFormControl';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface InputAdornmentTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Partial<Pick<FormControlProperties, 'size'>> & {
      /**
       * The position of the adornment in the Input element.
       */
      position: 'start' | 'end';
    };
  defaultComponent: D;
  classKey: InputAdornmentClassKey;
}

export type InputAdornmentProps<
  D extends ElementType = InputAdornmentTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<InputAdornmentTypeMap<P, D>, D>;

export type InputAdornmentClassKey = 'root';

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

const styles: Styles<InputAdornmentClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    /* from Mui */
    display: 'flex',
    alignItems: 'flex-start',
    whiteSpace: 'nowrap',
    /* for PDS */
    fontSize: theme.typography_alpha.pxToRem(24),
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
    fontSize: theme.typography_alpha.pxToRem(24),
    marginTop: 12, // shift-down in multiline input (= half of typical icon height + input top margin)
  },
  'private-root-size-small': {
    fontSize: theme.typography_alpha.pxToRem(20),
    marginTop: 8,
  },
  'private-root-size-medium-children-string': {
    ...theme.typography_alpha.body,
  },
  'private-root-size-small-children-string': {
    ...sizeSmallVariant,
  },
});

const InputAdornment: OverridableComponent<InputAdornmentTypeMap> = forwardRef(
  function InputAdornment(props, ref) {
    const {
      children,
      classes,
      className,
      // @ts-expect-error prop does not exist :/
      component: Component = 'div',
      position,
      // form control
      size: sizeProp,
      ...other
    } = props;

    const formControl = useFormControl({ size: sizeProp });

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
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_InputAdornment' })(
  InputAdornment
) as typeof InputAdornment;
