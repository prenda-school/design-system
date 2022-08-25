import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiChip,
  ChipProps as MuiChipProps,
} from '@material-ui/core/Chip';
import { CrossSmall } from '../internal';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { buildVariant } from '../theme/typography';
import { alpha, darken } from '@material-ui/core/styles';

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

const useStyles = makeStyles<TagClassKey>(
  (theme) => ({
    root: (props: TagProps) => {
      // style property value determinations are pulled out into this function body because there's significant reuse and patterns for the background color in pseudo-states, and because of a special styling case

      let borderColor, borderStyle, borderWidth;

      let padding;
      if (props.size === 'medium') {
        padding = '6px 16px';
      } else if (props.size === 'small') {
        padding = '2px 12px';
      }

      let backgroundColor;
      let color = theme.palette.text.heading;
      if (props.color === 'neutral' && props.variant === 'bold') {
        backgroundColor = theme.palette.neutral[70];
      } else if (props.color === 'neutral' && props.variant === 'subtle') {
        backgroundColor = theme.palette.neutral[0];
        // Special case: add border and decrease padding to account for the added height/width
        borderColor = theme.palette.neutral[70];
        borderStyle = 'solid';
        borderWidth = '1px';
        if (props.size === 'medium') {
          padding = '5px 15px';
        } else if (props.size === 'small') {
          padding = '1px 11px';
        }
      } else if (props.color === 'red' && props.variant === 'bold') {
        backgroundColor = theme.palette.red[700];
        color = theme.palette.text.inverseHeading;
      } else if (props.color === 'red' && props.variant === 'subtle') {
        backgroundColor = theme.palette.red[100];
      } else if (props.color === 'yellow' && props.variant === 'bold') {
        backgroundColor = theme.palette.yellow[500];
      } else if (props.color === 'yellow' && props.variant === 'subtle') {
        backgroundColor = theme.palette.yellow[200];
      } else if (props.color === 'teal' && props.variant === 'bold') {
        backgroundColor = theme.palette.teal[600];
        color = theme.palette.text.inverseHeading;
      } else if (props.color === 'teal' && props.variant === 'subtle') {
        backgroundColor = theme.palette.teal[100];
      } else if (props.color === 'green' && props.variant === 'bold') {
        backgroundColor = theme.palette.green[600];
        color = theme.palette.text.inverseHeading;
      } else if (props.color === 'green' && props.variant === 'subtle') {
        backgroundColor = theme.palette.green[100];
      } else if (props.color === 'blue' && props.variant === 'bold') {
        backgroundColor = theme.palette.blue[600];
        color = theme.palette.text.inverseHeading;
      } else if (props.color === 'blue' && props.variant === 'subtle') {
        backgroundColor = theme.palette.blue[100];
      } else if (props.color === 'purple' && props.variant === 'bold') {
        backgroundColor = theme.palette.purple[600];
        color = theme.palette.text.inverseHeading;
      } else if (props.color === 'purple' && props.variant === 'subtle') {
        backgroundColor = theme.palette.purple[100];
      }

      return {
        borderRadius: 4,
        height: 'unset', // unset MUI
        // Determined in fn body
        color,
        backgroundColor,
        borderColor,
        borderStyle,
        borderWidth,
        padding,
        '&:focus': {
          backgroundColor, // override MUI
        },
        /** onClick (clickable) */
        ...(props.onClick && {
          // artificially increase specificity to override MUI
          '&&': {
            '&:hover': {
              ...(props.variant === 'bold' && {
                backgroundColor: darken(backgroundColor, 0.2),
              }),
              ...(props.variant === 'subtle' && {
                backgroundColor: darken(backgroundColor, 0.1),
              }),
            },
            '&:active': {
              boxShadow: 'none', // override MUI
              ...(props.variant === 'bold' && {
                backgroundColor: darken(backgroundColor, 0.4),
              }),
              ...(props.variant === 'subtle' && {
                backgroundColor: darken(backgroundColor, 0.2),
              }),
            },
          },
          '&.Mui-focusVisible, &:focus-visible': {
            boxShadow: `0px 0px 2px 4px ${theme.palette.teal[300]}`,
          },
        }),
        /** onDelete (deletable) */
        ...(props.onDelete && {
          // artificially increase specificity to override MUI
          '&&': {
            '&:hover': { backgroundColor },
            '&:active': { backgroundColor },
          },
          '&.Mui-focusVisible, &:focus-visible': {
            boxShadow: `0px 0px 2px 4px ${theme.palette.teal[300]}`,
          },
        }),
      };
    },
    label: (props: TagProps) => ({
      color: 'inherit',
      padding: 0, // unset MUI
      // artificially shift label down by 1px to appear more centered; especially apparent when beside an icon
      marginTop: 1,
      marginBottom: -1,
      /* size */
      ...(props.size === 'medium' && tagFontVariantMedium),
      ...(props.size === 'small' && tagFontVariantSmall),
    }),
    deleteIcon: (props: TagProps) => ({
      borderRadius: 2,
      color: 'inherit',
      height: '1em',
      margin: '0 0 0 4px',
      width: '1em',
      /* size */
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(12),
      }),
      '&:hover': {
        color: 'inherit', // override MUI
        /* variant */
        ...(props.variant === 'bold' && {
          backgroundColor: alpha(theme.palette.neutral[600], 0.2),
        }),
        ...(props.variant === 'subtle' && {
          backgroundColor: alpha(theme.palette.neutral[600], 0.1),
        }),
      },
      '&:active': {
        /* variant */
        ...(props.variant === 'bold' && {
          backgroundColor: alpha(theme.palette.neutral[600], 0.3),
        }),
        ...(props.variant === 'subtle' && {
          backgroundColor: alpha(theme.palette.neutral[600], 0.2),
        }),
      },
    }),
    icon: (props: TagProps) => ({
      color: 'inherit',
      height: '1em',
      margin: '0 4px 0 0',
      width: '1em',
      /* size */
      ...(props.size === 'medium' && {
        fontSize: theme.typography.pxToRem(16),
      }),
      ...(props.size === 'small' && {
        fontSize: theme.typography.pxToRem(12),
      }),
    }),
    avatar: {
      // blocked until `Avatar` initial implementation
    },
  }),
  { name: 'MuiPDSTag' }
);

const Tag: OverridableComponent<TagTypeMap> = forwardRef(function Tag(
  props,
  ref
) {
  const {
    classes: classesProp,
    color = 'neutral',
    onClick,
    onDelete,
    size = 'medium',
    variant = 'bold',
    ...other
  } = props;

  const classes = useStyles({ color, size, onClick, onDelete, variant });

  return (
    <MuiChip
      classes={{
        root: clsx(classes.root, classesProp?.root),
        label: clsx(classes.label, classesProp?.label),
        deleteIcon: clsx(classes.deleteIcon, classesProp?.deleteIcon),
        icon: clsx(classes.icon, classesProp?.icon),
        avatar: clsx(classes.avatar, classesProp?.avatar),
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

export default Tag;
