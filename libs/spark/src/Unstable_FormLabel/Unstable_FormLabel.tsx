import React, { ElementType, forwardRef } from 'react';
import MuiFormLabel, {
  FormLabelProps as MuiFormLabelProps,
} from '@material-ui/core/FormLabel';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';
import clsx from 'clsx';
import { buildVariant } from '../theme/typography';
import useFormControl_unstable from '../useFormControl_unstable';

export interface Unstable_FormLabelTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'label'
> {
  props: P &
    Omit<MuiFormLabelProps, 'classes' | 'color' | 'filled'> & {
      /**
       * The size of the label.
       */
      size?: 'medium' | 'small';
    };
  defaultComponent: D;
  classKey: Unstable_FormLabelClassKey;
}

export type Unstable_FormLabelProps<
  D extends ElementType = Unstable_FormLabelTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_FormLabelTypeMap<P, D>, D>;

export type Unstable_FormLabelClassKey = 'root' | 'asterisk';

type PrivateClassKey = 'private-root-size-medium' | 'private-root-size-small';

const sizeSmallVariant = buildVariant(
  600,
  14,
  16,
  undefined,
  undefined,
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

const styles: Styles<Unstable_FormLabelClassKey | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.unstable_palette.text.heading,
    display: 'inline-block',
    margin: 0,
    /* focused -- can get from internal context => can't condition on prop */
    '&.Mui-focused': {
      // override Mui default
      color: theme.unstable_palette.text.heading,
    },
    /* error -- can get from internal context => can't condition on prop */
    '&.Mui-error': {
      color: theme.unstable_palette.text.heading,
    },
    /* disabled -- can get from internal context => can't condition on prop */
    '&.Mui-disabled': {
      color: theme.unstable_palette.text.disabled,
    },
  },
  /* Styles applied to the asterisk element. */
  asterisk: {
    '&.Mui-error': {
      color: theme.unstable_palette.red[600],
    },
    '.Mui-disabled > &': {
      color: theme.unstable_palette.text.disabled,
    },
  },
  /* Private */
  'private-root-size-medium': {
    ...theme.unstable_typography.label,
  },
  'private-root-size-small': {
    ...sizeSmallVariant,
  },
});

const Unstable_FormLabel: OverridableComponent<Unstable_FormLabelTypeMap> =
  forwardRef(function Unstable_FormLabel(props, ref) {
    const {
      classes,
      color: _color,
      htmlFor: htmlForProp,
      id: idProp,
      size: _size,
      ...other
    } = props;

    const formControl = useFormControl_unstable(props);

    return (
      <MuiFormLabel
        classes={{
          root: clsx(
            classes.root,
            classes[`private-root-size-${formControl.size}`]
          ),
          asterisk: classes.asterisk,
        }}
        htmlFor={htmlForProp || formControl.id}
        id={idProp || formControl.labelId}
        ref={ref}
        {...other}
      />
    );
  });

export default withStyles(styles, { name: 'MuiSparkUnstable_FormLabel' })(
  Unstable_FormLabel
) as typeof Unstable_FormLabel;
