import * as React from 'react';
import clsx from 'clsx';
import type {
  ChipClassKey as MuiChipClassKey,
  ChipProps as MuiChipProps,
  Theme,
} from '@material-ui/core';
import MuiChip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  OverridableComponent,
  OverrideProps,
  capitalize,
  useTriMergeClasses,
} from './utils';
import { CrossSmall } from './internal';

export type TagClassKey = MuiChipClassKey | CustomClassKey;

type CustomClassKey =
  | 'colorRed'
  | 'colorOrange'
  | 'colorYellow'
  | 'colorGreen'
  | 'colorBlue'
  | 'colorPurple'
  | 'bold'
  | 'boldColorRed'
  | 'boldColorOrange'
  | 'boldColorYellow'
  | 'boldColorGreen'
  | 'boldColorBlue'
  | 'boldColorPurple'
  | 'labelColorRed'
  | 'labelColorOrange'
  | 'labelColorYellow'
  | 'labelColorGreen'
  | 'labelColorBlue'
  | 'labelColorPurple'
  | 'labelBold'
  | 'labelBoldColorRed'
  | 'labelBoldColorOrange'
  | 'labelBoldColorYellow'
  | 'labelBoldColorGreen'
  | 'labelBoldColorBlue'
  | 'labelBoldColorPurple'
  | 'deleteIconColorRed'
  | 'deleteIconColorOrange'
  | 'deleteIconColorYellow'
  | 'deleteIconColorGreen'
  | 'deleteIconColorBlue'
  | 'deleteIconColorPurple'
  | 'deleteIconBold'
  | 'deleteIconBoldColorRed'
  | 'deleteIconBoldColorOrange'
  | 'deleteIconBoldColorYellow'
  | 'deleteIconBoldColorGreen'
  | 'deleteIconBoldColorBlue'
  | 'deleteIconBoldColorPurple';

export interface TagTypeMap<
  P = Record<string, unknown>,
  D extends React.ElementType = 'div'
> {
  props: P &
    Omit<MuiChipProps, 'classes' | 'size' | 'color' | 'variant'> & {
      /**
       * The color of the tag.
       */
      color?:
        | 'default'
        | 'red'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'blue'
        | 'purple';
      /**
       * The variant of the tag.
       */
      variant?: 'subtle' | 'bold';
    };
  defaultComponent: D;
  classKey: TagClassKey;
}

export type TagProps<
  D extends React.ElementType = TagTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<TagTypeMap<P, D>, D>;

const useUnderlyingStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.common.white,
      border: `2px solid ${theme.palette.grey.medium}`,
      padding: 8,
      borderRadius: 24,
      height: 36,
      '&:focus': {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.grey.dark,
      },
    },
    label: {
      ...theme.typography['label-lg-strong'],
      color: theme.palette.text.onLight,
      padding: 0,
    },
    deleteIcon: {
      margin: '0 0 0 4px',
      fontSize: theme.typography.pxToRem(16),
      width: '1em',
      height: '1em',
      color: theme.palette.text.onLight,
      '&:hover, $root:focus > &': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.blue[5],
        borderRadius: 2,
      },
    },
  }),
  { name: 'MuiSparkTag' }
);

const useCustomStyles = makeStyles(
  (theme) => ({
    // order is important here
    //  - color should come before variant-color so variant-color will win
    colorRed: {
      backgroundColor: theme.palette.red[1],
      borderColor: theme.palette.red[1],
      '&:focus': {
        backgroundColor: theme.palette.red[1],
        borderColor: theme.palette.red[5],
      },
    },
    colorOrange: {
      backgroundColor: theme.palette.orange[1],
      borderColor: theme.palette.orange[1],
      '&:focus': {
        backgroundColor: theme.palette.orange[1],
        borderColor: theme.palette.orange[5],
      },
    },
    colorYellow: {
      backgroundColor: theme.palette.yellow[1],
      borderColor: theme.palette.yellow[1],
      '&:focus': {
        backgroundColor: theme.palette.yellow[1],
        borderColor: theme.palette.yellow[5],
      },
    },
    colorGreen: {
      backgroundColor: theme.palette.green[1],
      borderColor: theme.palette.green[1],
      '&:focus': {
        backgroundColor: theme.palette.green[1],
        borderColor: theme.palette.green[5],
      },
    },
    colorBlue: {
      backgroundColor: theme.palette.blue[1],
      borderColor: theme.palette.blue[1],
      '&:focus': {
        backgroundColor: theme.palette.blue[1],
        borderColor: theme.palette.blue[5],
      },
    },
    colorPurple: {
      backgroundColor: theme.palette.purple[1],
      borderColor: theme.palette.purple[1],
      '&:focus': {
        backgroundColor: theme.palette.purple[1],
        borderColor: theme.palette.purple[5],
      },
    },
    bold: {
      backgroundColor: theme.palette.grey.medium,
      '&:focus': {
        backgroundColor: theme.palette.grey.medium,
      },
    },
    boldColorRed: {
      backgroundColor: theme.palette.red[4],
      borderColor: theme.palette.red[4],
      '&:focus': {
        backgroundColor: theme.palette.red[4],
        // borderColor: theme.palette.red[5],
      },
    },
    boldColorOrange: {
      backgroundColor: theme.palette.orange[4],
      borderColor: theme.palette.orange[4],
      '&:focus': {
        backgroundColor: theme.palette.orange[4],
        borderColor: theme.palette.orange[5],
      },
    },
    boldColorYellow: {
      backgroundColor: theme.palette.yellow[4],
      borderColor: theme.palette.yellow[4],
      '&:focus': {
        backgroundColor: theme.palette.yellow[4],
        borderColor: theme.palette.yellow[5],
      },
    },
    boldColorGreen: {
      backgroundColor: theme.palette.green[4],
      borderColor: theme.palette.green[4],
      '&:focus': {
        backgroundColor: theme.palette.green[4],
        borderColor: theme.palette.green[5],
      },
    },
    boldColorBlue: {
      backgroundColor: theme.palette.blue[3],
      borderColor: theme.palette.blue[3],
      '&:focus': {
        backgroundColor: theme.palette.blue[3],
        borderColor: theme.palette.blue[5],
      },
    },
    boldColorPurple: {
      backgroundColor: theme.palette.purple[3],
      borderColor: theme.palette.purple[3],
      '&:focus': {
        backgroundColor: theme.palette.purple[3],
        borderColor: theme.palette.purple[5],
      },
    },
    labelColorRed: {
      color: theme.palette.red[5],
    },
    labelColorOrange: {
      color: theme.palette.orange[5],
    },
    labelColorYellow: {
      color: theme.palette.yellow[5],
    },
    labelColorGreen: {
      color: theme.palette.green[5],
    },
    labelColorBlue: {
      color: theme.palette.blue[5],
    },
    labelColorPurple: {
      color: theme.palette.purple[5],
    },
    labelBold: {
      color: theme.palette.text.onLight,
    },
    labelBoldColorRed: {
      color: theme.palette.common.white,
    },
    labelBoldColorOrange: {
      color: theme.palette.common.white,
    },
    labelBoldColorYellow: {
      color: theme.palette.common.white,
    },
    labelBoldColorGreen: {
      color: theme.palette.common.white,
    },
    labelBoldColorBlue: {
      color: theme.palette.common.white,
    },
    labelBoldColorPurple: {
      color: theme.palette.common.white,
    },
    deleteIconColorRed: {
      color: theme.palette.red[5],
      '&:hover, .MuiChip-root:focus > &': {
        backgroundColor: theme.palette.red[5],
      },
    },
    deleteIconColorOrange: {
      color: theme.palette.orange[5],
      '&:hover, .MuiChip-root:focus > &': {
        backgroundColor: theme.palette.orange[5],
      },
    },
    deleteIconColorYellow: {
      color: theme.palette.yellow[5],
      '&:hover, .MuiChip-root:focus > &': {
        backgroundColor: theme.palette.yellow[5],
      },
    },
    deleteIconColorGreen: {
      color: theme.palette.green[5],
      '&:hover, .MuiChip-root:focus > &': {
        backgroundColor: theme.palette.green[5],
      },
    },
    deleteIconColorBlue: {
      color: theme.palette.blue[5],
      '&:hover, .MuiChip-root:focus > &': {
        backgroundColor: theme.palette.blue[5],
      },
    },
    deleteIconColorPurple: {
      color: theme.palette.purple[5],
      '&:hover, .MuiChip-root:focus > &': {
        backgroundColor: theme.palette.purple[5],
      },
    },
    deleteIconBold: {
      color: theme.palette.text.onLight,
    },
    deleteIconBoldColorRed: {
      color: theme.palette.common.white,
    },
    deleteIconBoldColorOrange: {
      color: theme.palette.common.white,
    },
    deleteIconBoldColorYellow: {
      color: theme.palette.common.white,
    },
    deleteIconBoldColorGreen: {
      color: theme.palette.common.white,
    },
    deleteIconBoldColorBlue: {
      color: theme.palette.common.white,
    },
    deleteIconBoldColorPurple: {
      color: theme.palette.common.white,
    },
  }),
  { name: 'MuiSparkTag' }
);

const Tag: OverridableComponent<TagTypeMap> = React.forwardRef(function Tag(
  {
    classes: passedClasses = {},
    color = 'default',
    variant = 'subtle',
    ...other
  },
  ref
) {
  const baseUnderlyingClasses = useUnderlyingStyles();

  const baseCustomClasses = useCustomStyles();

  const { underlyingClasses, customClasses } = useTriMergeClasses<
    MuiChipClassKey,
    CustomClassKey
  >({
    baseUnderlyingClasses,
    baseCustomClasses,
    passedClasses,
  });

  return (
    <MuiChip
      classes={{
        ...underlyingClasses,
        root: clsx(underlyingClasses.root, {
          [customClasses[`color${capitalize(color)}`]]: color !== 'default',
          [customClasses[variant]]: variant !== 'subtle',
          [customClasses[`${variant}Color${capitalize(color)}`]]:
            variant !== 'subtle' && color !== 'default',
        }),
        label: clsx(underlyingClasses.label, {
          [customClasses[`labelColor${capitalize(color)}`]]:
            color !== 'default',
          [customClasses[`label${capitalize(variant)}`]]: variant !== 'subtle',
          [customClasses[
            `label${capitalize(variant)}Color${capitalize(color)}`
          ]]: variant !== 'subtle' && color !== 'default',
        }),
        deleteIcon: clsx(underlyingClasses.deleteIcon, {
          [customClasses[`deleteIcon${capitalize(variant)}`]]:
            variant !== 'subtle',
          [customClasses[`deleteIconColor${capitalize(color)}`]]:
            color !== 'default',
          [customClasses[
            `deleteIcon${capitalize(variant)}Color${capitalize(color)}`
          ]]: variant !== 'subtle' && color !== 'default',
        }),
      }}
      deleteIcon={<CrossSmall />}
      ref={ref}
      {...other}
    />
  );
});

export default Tag;
