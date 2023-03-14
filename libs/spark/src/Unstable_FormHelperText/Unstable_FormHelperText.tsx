import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';
import { buildVariant } from '../theme/typography';
import useFormControl_unstable, {
  FormControlProperties_Unstable,
} from '../useFormControl_unstable';

export interface Unstable_FormHelperTextTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'p'
> {
  props: P &
    Partial<
      Pick<
        FormControlProperties_Unstable,
        'disabled' | 'error' | 'filled' | 'focused' | 'required' | 'size'
      >
    > & {
      /**
       * The content of the component.
       */
      children?: React.ReactNode;
      /**
       * Icon placed before the children.
       */
      leadingIcon?: ReactNode;
      /**
       * If `true`, the component reserves one line height for displaying a future message.
       */
      reserveLineHeight?: boolean;
    };
  defaultComponent: D;
  classKey: Unstable_FormHelperTextClassKey;
}

export type Unstable_FormHelperTextProps<
  D extends ElementType = Unstable_FormHelperTextTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_FormHelperTextTypeMap<P, D>, D>;

export type Unstable_FormHelperTextClassKey =
  | 'root'
  | 'leadingIcon'
  | 'error'
  | 'disabled'
  | 'focused'
  | 'required';

type PrivateClassKey = 'private-root-size-medium' | 'private-root-size-small';

const sizeSmallVariant = buildVariant(
  400,
  12,
  16,
  undefined,
  undefined,
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

const styles: Styles<Unstable_FormHelperTextClassKey | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {
    alignItems: 'center',
    color: theme.unstable_palette.text.subdued,
    display: 'inline-flex',
    gap: 4,
    letterSpacing: 0,
    margin: 0,
    textAlign: 'left',
    width: 'fit-content',
    '& ul, & ol': {
      marginBlock: 0, // reset HTML default
      paddingInlineStart: '1rem', // reduce HTML default
    },
    /* error -- can get from internal context => can't condition on prop */
    '&.Mui-error': {
      color: theme.unstable_palette.red[700],
    },
    /* disabled -- can get from internal context => can't condition on prop */
    '&.Mui-disabled': {
      color: theme.unstable_palette.text.disabled,
    },
  },
  /* Class applied to the root element if `error={true}`. */
  error: {},
  /* Class applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Class applied to the root element if `focused={true}`. */
  focused: {},
  /* Class applied to the root element if `required={true}`. */
  required: {},
  /* Styles applied to the leadingIcon element. */
  leadingIcon: {
    alignSelf: 'flex-start',
    display: 'flex',
    marginTop: 3,
  },
  /* Private */
  'private-root-size-medium': {
    ...theme.unstable_typography.description,
  },
  'private-root-size-small': {
    ...sizeSmallVariant,
  },
});

const Unstable_FormHelperText: OverridableComponent<Unstable_FormHelperTextTypeMap> =
  forwardRef(function Unstable_FormHelperText(props, ref) {
    const {
      children,
      classes,
      className,
      // @ts-expect-error not picked up as a prop from `OverridableComponent`
      component: Component = 'p',
      leadingIcon,
      reserveLineHeight,
      // form control
      disabled: disabledProp,
      error: errorProp,
      filled: filledProp,
      focused: focusedProp,
      id: idProp,
      required: requiredProp,
      size: sizeProp,
      ...other
    } = props;

    const formControl = useFormControl_unstable({
      disabled: disabledProp,
      error: errorProp,
      filled: filledProp,
      focused: focusedProp,
      helperTextId: idProp,
      required: requiredProp,
      size: sizeProp,
    });

    return (
      <Component
        className={clsx(
          classes.root,
          classes[`private-root-size-${formControl.size}`],
          {
            [classes.disabled]: formControl.disabled,
            [classes.error]: formControl.error,
            [classes.focused]: formControl.focused,
            [classes.required]: formControl.required,
          },
          className
        )}
        id={formControl.helperTextId}
        ref={ref}
        {...other}
      >
        {leadingIcon ? (
          <span className={classes.leadingIcon}>{leadingIcon}</span>
        ) : null}
        {children}
        {reserveLineHeight && !leadingIcon && !children ? (
          // eslint-disable-next-line react/no-danger
          <span dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
        ) : null}
      </Component>
    );
  });

export default withStyles(styles, { name: 'MuiSparkUnstable_FormHelperText' })(
  Unstable_FormHelperText
) as typeof Unstable_FormHelperText;
