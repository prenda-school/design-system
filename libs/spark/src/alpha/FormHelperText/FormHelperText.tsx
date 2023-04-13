import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';
import { buildVariant } from '../theme/typography';
import useFormControl, { FormControlProperties } from '../useFormControl';

export interface FormHelperTextTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'p'
> {
  props: P &
    Partial<
      Pick<
        FormControlProperties,
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
  classKey: FormHelperTextClassKey;
}

export type FormHelperTextProps<
  D extends ElementType = FormHelperTextTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<FormHelperTextTypeMap<P, D>, D>;

export type FormHelperTextClassKey =
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

const styles: Styles<FormHelperTextClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    alignItems: 'center',
    color: theme.palette_alpha.text.subdued,
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
      color: theme.palette_alpha.red[700],
    },
    /* disabled -- can get from internal context => can't condition on prop */
    '&.Mui-disabled': {
      color: theme.palette_alpha.text.disabled,
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
    ...theme.typography_alpha.description,
  },
  'private-root-size-small': {
    ...sizeSmallVariant,
  },
});

const FormHelperText: OverridableComponent<FormHelperTextTypeMap> = forwardRef(
  function FormHelperText(props, ref) {
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

    const formControl = useFormControl({
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
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_FormHelperText' })(
  FormHelperText
) as typeof FormHelperText;