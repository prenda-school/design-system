import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiChip,
  ChipClassKey as MuiChipClassKey,
  ChipProps as MuiChipProps,
} from '@material-ui/core/Chip';
import { CrossSmall } from '../internal';
import makeStyles from '../makeStyles';
import {
  OverridableComponent,
  OverrideProps,
  capitalize,
  useClassesCapture,
} from '../utils';

export type TagClassKey = MuiChipClassKey | CustomClassKey;

type CustomClassKey =
  // underlying
  | 'root'
  | 'label'
  | 'deleteIcon'
  // custom
  | 'colorRed'
  | 'colorOrange'
  | 'colorYellow'
  | 'colorGreen'
  | 'colorBlue'
  | 'colorPurple'
  | 'bold';

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

const useCustomStyles = makeStyles<CustomClassKey>(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.common.white,
      border: `2px solid ${theme.palette.grey.medium}`,
      padding: 8,
      borderRadius: 24,
      height: 36,
      '&:focus-visible': {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.grey.dark,
      },
    },
    // order is important inside values; later key:value declarations win
    colorRed: {
      backgroundColor: theme.palette.red[1],
      borderColor: theme.palette.red[1],
      '&:focus-visible': {
        backgroundColor: theme.palette.red[1],
        borderColor: theme.palette.red[5],
      },
      '&$bold': {
        backgroundColor: theme.palette.red[4],
        borderColor: theme.palette.red[4],
        '&:focus-visible': {
          backgroundColor: theme.palette.red[4],
          borderColor: theme.palette.red[5],
        },
      },
    },
    colorOrange: {
      backgroundColor: theme.palette.orange[1],
      borderColor: theme.palette.orange[1],
      '&:focus-visible': {
        backgroundColor: theme.palette.orange[1],
        borderColor: theme.palette.orange[5],
      },
      '&$bold': {
        backgroundColor: theme.palette.orange[4],
        borderColor: theme.palette.orange[4],
        '&:focus-visible': {
          backgroundColor: theme.palette.orange[4],
          borderColor: theme.palette.orange[5],
        },
      },
    },
    colorYellow: {
      backgroundColor: theme.palette.yellow[1],
      borderColor: theme.palette.yellow[1],
      '&:focus-visible': {
        backgroundColor: theme.palette.yellow[1],
        borderColor: theme.palette.yellow[5],
      },
      '&$bold': {
        backgroundColor: theme.palette.yellow[4],
        borderColor: theme.palette.yellow[4],
        '&:focus-visible': {
          backgroundColor: theme.palette.yellow[4],
          borderColor: theme.palette.yellow[5],
        },
      },
    },
    colorGreen: {
      backgroundColor: theme.palette.green[1],
      borderColor: theme.palette.green[1],
      '&:focus-visible': {
        backgroundColor: theme.palette.green[1],
        borderColor: theme.palette.green[5],
      },
      '&$bold': {
        backgroundColor: theme.palette.green[4],
        borderColor: theme.palette.green[4],
        '&:focus-visible': {
          backgroundColor: theme.palette.green[4],
          borderColor: theme.palette.green[5],
        },
      },
    },
    colorBlue: {
      backgroundColor: theme.palette.blue[1],
      borderColor: theme.palette.blue[1],
      '&:focus-visible': {
        backgroundColor: theme.palette.blue[1],
        borderColor: theme.palette.blue[5],
      },
      '&$bold': {
        backgroundColor: theme.palette.blue[3],
        borderColor: theme.palette.blue[3],
        '&:focus-visible': {
          backgroundColor: theme.palette.blue[3],
          borderColor: theme.palette.blue[5],
        },
      },
    },
    colorPurple: {
      backgroundColor: theme.palette.purple[1],
      borderColor: theme.palette.purple[1],
      '&:focus-visible': {
        backgroundColor: theme.palette.purple[1],
        borderColor: theme.palette.purple[5],
      },
      '&$bold': {
        backgroundColor: theme.palette.purple[3],
        borderColor: theme.palette.purple[3],
        '&:focus-visible': {
          backgroundColor: theme.palette.purple[3],
          borderColor: theme.palette.purple[5],
        },
      },
    },
    bold: {
      backgroundColor: theme.palette.grey.medium,
      '&:focus-visible': {
        backgroundColor: theme.palette.grey.medium,
      },
    },
    label: {
      ...theme.typography['label-lg-strong'],
      color: theme.palette.text.dark,
      padding: 0,
      '$colorRed &': {
        color: theme.palette.red[5],
      },
      '$colorOrange &': {
        color: theme.palette.orange[5],
      },
      '$colorYellow &': {
        color: theme.palette.yellow[5],
      },
      '$colorGreen &': {
        color: theme.palette.green[5],
      },
      '$colorBlue &': {
        color: theme.palette.blue[5],
      },
      '$colorPurple &': {
        color: theme.palette.purple[5],
      },
      '$bold &': {
        color: theme.palette.text.dark,
      },
      '$bold$colorRed &': {
        color: theme.palette.common.white,
      },
      '$bold$colorOrange &': {
        color: theme.palette.common.white,
      },
      '$bold$colorYellow &': {
        color: theme.palette.common.white,
      },
      '$bold$colorGreen &': {
        color: theme.palette.common.white,
      },
      '$bold$colorBlue &': {
        color: theme.palette.common.white,
      },
      '$bold$colorPurple &': {
        color: theme.palette.common.white,
      },
    },
    deleteIcon: {
      margin: '0 0 0 4px',
      fontSize: theme.typography.pxToRem(16),
      width: '1em',
      height: '1em',
      color: theme.palette.text.dark,
      // artificially increase specificity to win over `$bold &`
      '&&:hover, $root:focus-visible > &': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.blue[5],
        borderRadius: 2,
      },
      '$colorRed &': {
        color: theme.palette.red[5],
        '&:hover, $root:focus-visible&': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.red[5],
        },
      },
      '$colorOrange &': {
        color: theme.palette.orange[5],
        '&:hover, $root:focus-visible&': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.orange[5],
        },
      },
      '$colorYellow &': {
        color: theme.palette.yellow[5],
        '&:hover, $root:focus-visible&': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.yellow[5],
        },
      },
      '$colorGreen &': {
        color: theme.palette.green[5],
        '&:hover, $root:focus-visible&': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.green[5],
        },
      },
      '$colorBlue &': {
        color: theme.palette.blue[5],
        '&:hover, $root:focus-visible&': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.blue[5],
        },
      },
      '$colorPurple &': {
        color: theme.palette.purple[5],
        '&:hover, $root:focus-visible&': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.purple[5],
        },
      },
      '$bold &': {
        color: theme.palette.text.dark,
      },
      '$bold$colorRed &': {
        color: theme.palette.common.white,
      },
      '$bold$colorOrange &': {
        color: theme.palette.common.white,
      },
      '$bold$colorYellow &': {
        color: theme.palette.common.white,
      },
      '$bold$colorGreen &': {
        color: theme.palette.common.white,
      },
      '$bold$colorBlue &': {
        color: theme.palette.common.white,
      },
      '$bold$colorPurple &': {
        color: theme.palette.common.white,
      },
    },
  }),
  { name: 'MuiSparkTag' }
);

const Tag: OverridableComponent<TagTypeMap> = React.forwardRef(function Tag(
  { classes, color = 'default', variant = 'subtle', ...other },
  ref
) {
  const baseCustomClasses = useCustomStyles();

  const { otherClasses, customClasses } = useClassesCapture<
    TagClassKey,
    CustomClassKey
  >({
    baseCustomClasses,
    classes,
  });

  return (
    <MuiChip
      classes={{
        ...otherClasses,
        root: clsx(customClasses.root, {
          [customClasses[`color${capitalize(color)}`]]: color !== 'default',
          [customClasses[variant]]: variant !== 'subtle',
        }),
        label: customClasses.label,
        deleteIcon: customClasses.deleteIcon,
      }}
      deleteIcon={<CrossSmall />}
      ref={ref}
      {...other}
    />
  );
});

export default Tag;
