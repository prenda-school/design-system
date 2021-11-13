import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiIconButton,
  IconButtonClassKey as MuiIconButtonClassKey,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core/IconButton';
import makeStyles from '../makeStyles';
import { OverridableComponent, capitalize, useClassesCapture } from '../utils';

export interface IconButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'button'
> {
  props: P & IconButtonProps;
  defaultComponent: D;
  classKey: IconButtonClassKey;
}

export type IconButtonProps = Omit<MuiIconButtonProps, 'classes' | 'size'> & {
  /**
   * The size of the icon button.
   */
  size?: 'large' | 'medium';
  /**
   * The variant of the icon button.
   */
  variant?: 'contained' | 'outlined' | 'text';
};

export type IconButtonClassKey = MuiIconButtonClassKey | CustomClassKey;

// IconButton is used in Radio/Checkbox, so all used classes must be
// scoped specifically to the custom component so they don't affect
// auxiliary, global use.
type CustomClassKey =
  // from underlying
  | 'root'
  | 'label'
  | 'disabled'
  // custom
  | 'contained'
  | 'outlined'
  | 'text'
  | 'sizeLarge'
  | 'sizeMedium';

const useCustomStyles = makeStyles<CustomClassKey>(
  ({ palette, typography }) => ({
    root: {
      borderRadius: '50%',
      borderWidth: 2,
      borderStyle: 'solid' as const,
      '&$disabled': {
        opacity: '50%',
      },
      '&:focus': {
        boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      },
    },
    label: {
      color: 'inherit',
      '$sizeLarge &': {
        fontSize: typography.pxToRem(24),
        lineHeight: typography.pxToRem(24),
      },
      '$sizeMedium &': {
        fontSize: typography.pxToRem(20),
        lineHeight: typography.pxToRem(20),
      },
    },
    disabled: {},
    contained: {
      borderColor: palette.blue[3],
      backgroundColor: palette.blue[3],
      color: palette.common.white,
      '&$disabled': {
        backgroundColor: palette.blue[3],
        color: palette.common.white,
      },
      '&:hover': {
        borderColor: palette.blue[4],
        backgroundColor: palette.blue[4],
      },
      '&:active': {
        borderColor: palette.blue[5],
      },
    },
    outlined: {
      borderColor: palette.grey.medium,
      backgroundColor: palette.common.white,
      color: palette.blue[3],
      '&$disabled': {
        backgroundColor: palette.common.white,
        color: palette.blue[3],
      },
      '&:hover': {
        backgroundColor: palette.grey.light,
      },
      '&:active': {
        backgroundColor: palette.grey.light,
        borderColor: palette.blue[5],
      },
    },
    text: {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: palette.blue[3],
      '&$disabled': {
        backgroundColor: 'transparent',
        color: palette.blue[3],
      },
      '&:hover': {
        color: palette.blue[4],
        backgroundColor: 'transparent',
      },
      '&:focus': {
        borderColor: palette.blue[3],
        backgroundColor: palette.blue[1],
      },
      '&:active': {
        color: palette.blue[4],
      },
    },
    sizeLarge: {
      padding: 10, // plus 2px border width for 12px
    },
    sizeMedium: {
      padding: 4, // plus 2px border width for 6px
    },
  }),
  { name: 'MuiSparkIconButton' }
);

const IconButton: OverridableComponent<IconButtonTypeMap> = React.forwardRef(
  function IconButton(
    { classes, variant = 'contained', size = 'large', children, ...other },
    ref
  ) {
    const baseCustomClasses = useCustomStyles();

    const { otherClasses, customClasses } = useClassesCapture<
      IconButtonClassKey,
      CustomClassKey
    >({
      classes,
      baseCustomClasses,
    });

    return (
      <MuiIconButton
        classes={{
          ...otherClasses,
          root: clsx(
            customClasses.root,
            customClasses[variant],
            customClasses[`size${capitalize(size)}`]
          ),
          label: customClasses.label,
          disabled: customClasses.disabled,
        }}
        disableFocusRipple
        disableRipple
        ref={ref}
        {...other}
      >
        {children}
      </MuiIconButton>
    );
  }
);

// @ts-expect-error property displayName does not exist
IconButton.displayName = 'IconButton';

export default IconButton;
