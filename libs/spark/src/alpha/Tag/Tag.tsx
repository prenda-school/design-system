import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { ChipProps as MuiChipProps } from '@material-ui/core/Chip';
import { default as MuiChip } from '@material-ui/core/Chip';
import { CrossSmall } from '../../internal';
import type { OverridableComponent, OverrideProps } from '../../utils';
import { buildVariant } from '../theme/typography';
import { alpha, darken } from '@material-ui/core/styles';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface TagTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Omit<
      MuiChipProps,
      'classes' | 'clickable' | 'color' | 'size' | 'variant'
    > & {
      /**
       * The color of the tag.
       */
      color?:
        | 'neutral'
        | 'red'
        | 'yellow'
        | 'teal'
        | 'green'
        | 'blue'
        | 'purple';
      /**
       * The size of the tag.
       */
      size?: 'medium' | 'small';
      /**
       * The variant of the tag.
       */
      variant?: 'subtle' | 'bold';
    };
  defaultComponent: D;
  classKey: TagClassKey;
}

export type TagProps<
  D extends ElementType = TagTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<TagTypeMap<P, D>, D>;

export type TagClassKey = 'root' | 'label' | 'deleteIcon' | 'icon' | 'avatar';

type PrivateClassKey =
  | 'private-root-clickable'
  | 'private-root-deletable'
  | 'private-root-size-small'
  | 'private-root-size-medium'
  | 'private-root-variant-bold-color-neutral'
  | 'private-root-variant-bold-color-red'
  | 'private-root-variant-bold-color-yellow'
  | 'private-root-variant-bold-color-teal'
  | 'private-root-variant-bold-color-green'
  | 'private-root-variant-bold-color-blue'
  | 'private-root-variant-bold-color-purple'
  | 'private-root-variant-subtle-color-neutral'
  | 'private-root-variant-subtle-color-neutral-size-small'
  | 'private-root-variant-subtle-color-neutral-size-medium'
  | 'private-root-variant-subtle-color-red'
  | 'private-root-variant-subtle-color-yellow'
  | 'private-root-variant-subtle-color-teal'
  | 'private-root-variant-subtle-color-green'
  | 'private-root-variant-subtle-color-blue'
  | 'private-root-variant-subtle-color-purple'
  | 'private-label-size-small'
  | 'private-label-size-medium'
  | 'private-icon-size-small'
  | 'private-icon-size-medium'
  | 'private-deleteIcon-size-small'
  | 'private-deleteIcon-size-medium'
  | 'private-deleteIcon-variant-bold'
  | 'private-deleteIcon-variant-subtle';

// extracted since there's not an equivalent typography variant
const tagFontVariantMedium = buildVariant(
  500,
  16,
  20,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);
const tagFontVariantSmall = buildVariant(
  500,
  12,
  20,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

const styles: Styles<TagClassKey | PrivateClassKey> = (theme) => ({
  root: {
    borderRadius: theme.radii_alpha.sm,
    height: 'unset', // unset MUI
    // Determined in fn body
    color: theme.palette_alpha.text.heading,
    '&.Mui-focusVisible, &:focus-visible': {
      boxShadow: theme.shadows_alpha.focus,
    },
  },
  label: {
    color: 'inherit',
    padding: 0, // unset MUI
    // artificially shift label down by 1px to appear more centered; especially apparent when beside an icon
    marginTop: 1,
    marginBottom: -1,
  },
  icon: {
    color: 'inherit',
    height: '1em',
    margin: '0 4px 0 0',
    width: '1em',
  },
  deleteIcon: {
    borderRadius: theme.radii_alpha.xs,
    color: 'inherit',
    height: '1em',
    margin: '0 0 0 4px',
    width: '1em',
    '&:hover': {
      color: 'inherit', // override MUI
    },
  },
  avatar: {
    // blocked until `Avatar` initial implementation
  },
  /* Private */
  'private-root-clickable': {
    '&:active': {
      boxShadow: theme.shadows_alpha.none, // override MUI
    },
  },
  'private-root-deletable': {},
  'private-root-size-small': {
    padding: '2px 12px',
  },
  'private-root-size-medium': {
    padding: '6px 16px',
  },
  'private-root-variant-bold-color-neutral': {
    backgroundColor: theme.palette_alpha.neutral[70],
    '&:focus': {
      backgroundColor: theme.palette_alpha.neutral[70], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.neutral[70], 0.2),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.neutral[70], 0.4),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.neutral[70], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.neutral[70], // override MUI
    },
  },
  'private-root-variant-bold-color-red': {
    backgroundColor: theme.palette_alpha.red[700],
    color: theme.palette_alpha.text.inverseHeading,
    '&:focus': {
      backgroundColor: theme.palette_alpha.red[700], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.red[700], 0.2),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.red[700], 0.4),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.red[700], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.red[700], // override MUI
    },
  },
  'private-root-variant-bold-color-yellow': {
    backgroundColor: theme.palette_alpha.yellow[500],
    '&:focus': {
      backgroundColor: theme.palette_alpha.yellow[500], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.yellow[500], 0.2),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.yellow[500], 0.4),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.yellow[500], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.yellow[500], // override MUI
    },
  },
  'private-root-variant-bold-color-teal': {
    backgroundColor: theme.palette_alpha.teal[600],
    color: theme.palette_alpha.text.inverseHeading,
    '&:focus': {
      backgroundColor: theme.palette_alpha.teal[600], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.teal[600], 0.2),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.teal[600], 0.4),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.teal[600], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.teal[600], // override MUI
    },
  },
  'private-root-variant-bold-color-green': {
    backgroundColor: theme.palette_alpha.green[600],
    color: theme.palette_alpha.text.inverseHeading,
    '&:focus': {
      backgroundColor: theme.palette_alpha.green[600], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.green[600], 0.2),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.green[600], 0.4),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.green[600], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.green[600], // override MUI
    },
  },
  'private-root-variant-bold-color-blue': {
    backgroundColor: theme.palette_alpha.blue[600],
    color: theme.palette_alpha.text.inverseHeading,
    '&:focus': {
      backgroundColor: theme.palette_alpha.blue[600], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.blue[600], 0.2),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.blue[600], 0.4),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.blue[600], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.blue[600], // override MUI
    },
  },
  'private-root-variant-bold-color-purple': {
    backgroundColor: theme.palette_alpha.purple[600],
    color: theme.palette_alpha.text.inverseHeading,
    '&:focus': {
      backgroundColor: theme.palette_alpha.purple[600], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.purple[600], 0.2),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.purple[600], 0.4),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.purple[600], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.purple[600], // override MUI
    },
  },
  'private-root-variant-subtle-color-neutral': {
    backgroundColor: theme.palette_alpha.neutral[0],
    // Special case: add border and decrease padding to account for the added height/width
    border: theme.borders_alpha.subtle,
    '&:focus': {
      backgroundColor: theme.palette_alpha.neutral[0], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.neutral[0], 0.1),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.neutral[0], 0.2),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.neutral[0], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.neutral[0], // override MUI
    },
  },
  'private-root-variant-subtle-color-neutral-size-small': {
    padding: '1px 11px',
  },
  'private-root-variant-subtle-color-neutral-size-medium': {
    padding: '5px 15px',
  },
  'private-root-variant-subtle-color-red': {
    backgroundColor: theme.palette_alpha.red[200],
    '&:focus': {
      backgroundColor: theme.palette_alpha.red[200], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.red[200], 0.1),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.red[200], 0.2),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.red[200], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.red[200], // override MUI
    },
  },
  'private-root-variant-subtle-color-yellow': {
    backgroundColor: theme.palette_alpha.yellow[200],
    '&:focus': {
      backgroundColor: theme.palette_alpha.yellow[200], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.yellow[200], 0.1),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.yellow[200], 0.2),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.yellow[200], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.yellow[200], // override MUI
    },
  },
  'private-root-variant-subtle-color-teal': {
    backgroundColor: theme.palette_alpha.teal[200],
    '&:focus': {
      backgroundColor: theme.palette_alpha.teal[200], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.teal[200], 0.1),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.teal[200], 0.2),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.teal[200], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.teal[200], // override MUI
    },
  },
  'private-root-variant-subtle-color-green': {
    backgroundColor: theme.palette_alpha.green[200],
    '&:focus': {
      backgroundColor: theme.palette_alpha.green[200], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.green[200], 0.1),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.green[200], 0.2),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.green[200], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.green[200], // override MUI
    },
  },
  'private-root-variant-subtle-color-blue': {
    backgroundColor: theme.palette_alpha.blue[200],
    '&:focus': {
      backgroundColor: theme.palette_alpha.blue[200], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.blue[200], 0.1),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.blue[200], 0.2),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.blue[200], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.blue[200], // override MUI
    },
  },
  'private-root-variant-subtle-color-purple': {
    backgroundColor: theme.palette_alpha.purple[200],
    '&:focus': {
      backgroundColor: theme.palette_alpha.purple[200], // override MUI
    },
    '&$private-root-clickable:hover': {
      backgroundColor: darken(theme.palette_alpha.purple[200], 0.1),
    },
    '&$private-root-clickable:active': {
      backgroundColor: darken(theme.palette_alpha.purple[200], 0.2),
    },
    '&$private-root-deletable:hover': {
      backgroundColor: theme.palette_alpha.purple[200], // override MUI
    },
    '&$private-root-deletable:active': {
      backgroundColor: theme.palette_alpha.purple[200], // override MUI
    },
  },
  'private-label-size-small': {
    ...tagFontVariantSmall,
  },
  'private-label-size-medium': {
    ...tagFontVariantMedium,
  },
  'private-icon-size-small': {
    fontSize: theme.typography.pxToRem(12),
  },
  'private-icon-size-medium': {
    fontSize: theme.typography.pxToRem(16),
  },
  'private-deleteIcon-size-small': {
    fontSize: theme.typography.pxToRem(12),
  },
  'private-deleteIcon-size-medium': {
    fontSize: theme.typography.pxToRem(16),
  },
  'private-deleteIcon-variant-bold': {
    '&:hover': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.2),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.3),
    },
  },
  'private-deleteIcon-variant-subtle': {
    '&:hover': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.1),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette_alpha.neutral[600], 0.2),
    },
  },
});

const Tag: OverridableComponent<TagTypeMap> = forwardRef(function Tag(
  props,
  ref
) {
  const {
    classes,
    color = 'neutral',
    onClick,
    onDelete,
    size = 'medium',
    variant = 'bold',
    ...other
  } = props;

  return (
    <MuiChip
      classes={{
        root: clsx(
          classes.root,
          classes[`private-root-size-${size}`],
          classes[`private-root-variant-${variant}-color-${color}`],
          {
            [classes['private-root-clickable']]: !!onClick,
            [classes['private-root-deletable']]: !!onDelete,
            [classes['private-root-variant-subtle-color-neutral-size-small']]:
              variant === 'subtle' && color === 'neutral' && size === 'small',
            [classes['private-root-variant-subtle-color-neutral-size-medium']]:
              variant === 'subtle' && color === 'neutral' && size === 'medium',
          }
        ),
        label: clsx(classes.label, classes[`private-label-size-${size}`]),
        deleteIcon: clsx(
          classes.deleteIcon,
          classes[`private-deleteIcon-size-${size}`],
          classes[`private-deleteIcon-variant-${variant}`]
        ),
        icon: clsx(classes.icon, classes[`private-icon-size-${size}`]),
        avatar: classes.avatar,
      }}
      deleteIcon={<CrossSmall />}
      onClick={onClick}
      onDelete={onDelete}
      ref={ref}
      {...other}
      {...(onClick && {
        // `disableFocusRipple` leaks to DOM
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: false,
      })}
    />
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_Tag' })(
  Tag
) as typeof Tag;
