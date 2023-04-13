import React from 'react';
import clsx from 'clsx';
import makeStyles from '../../makeStyles';
import createSvgIcon from '../createSvgIcon';

const useStyles = makeStyles<
  'root' | 'checked' | 'indeterminate' | 'box' | 'check' | 'dash'
>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      position: 'relative' as const,
      borderRadius: theme.radii_alpha.xs,
      color: theme.palette_alpha.neutral[200],
      // Adjust for irregular svg size
      height: 17,
      width: 17,
      '& > svg': {
        height: 17,
        width: 17,
      },
      /* error */
      '.Mui-error &': {
        boxShadow: theme.shadows_alpha.error,
        color: theme.palette_alpha.red[700],
      },
      /* focus-visible */
      '.Mui-focusVisible &, input:focus-visible ~ &': {
        boxShadow: theme.shadows_alpha.focus,
      },
      /* disabled */
      'input:disabled ~ &&': {
        boxShadow: theme.shadows_alpha.none, // can be present from `error`
        color: theme.palette_alpha.neutral[90],
      },
    },
    /* Styles applied to the root element when `checked={true}`. */
    checked: {
      color: theme.palette_alpha.blue[600],
      /* hover */
      'input:hover ~ &, label:hover  &': {
        color: theme.palette_alpha.blue[400],
      },
      /* error */
      '.Mui-error &': {
        color: theme.palette_alpha.red[600],
      },
      /* error & hover */
      '.Mui-error input:hover ~ &, .Mui-error label:hover ~ &': {
        color: theme.palette_alpha.red[400],
      },
      /* disabled */
      'input:disabled ~ &&': {
        color: theme.palette_alpha.neutral[80],
      },
    },
    /* Styles applied to the root element when `indeterminate={true}`. */
    indeterminate: {
      color: theme.palette_alpha.blue[600],
      /* hover */
      'input:hover ~ &, label:hover ~ &': {
        color: theme.palette_alpha.blue[400],
      },
      /* error */
      '.Mui-error &': {
        color: theme.palette_alpha.red[600],
      },
      /* error & hover */
      '.Mui-error input:hover ~ &, .Mui-error label:hover ~ &': {
        color: theme.palette_alpha.red[400],
      },
      /* disabled */
      'input:disabled ~ &&': {
        color: theme.palette_alpha.neutral[80],
      },
    },
    /* Styles applied to the box icon. */
    box: {
      borderRadius: theme.radii_alpha.xs,
      /* hover */
      'input:hover ~ $root > &, label:hover ~ $root > &': {
        backgroundColor: theme.palette_alpha.neutral[70],
      },
      /* checked | indeterminate */
      '$checked > &, $indeterminate > &': {
        backgroundColor: theme.palette_alpha.blue[600],
      },
      /* (checked | indeterminate) & hover */
      'input:hover ~ $checked > &, input:hover ~ $indeterminate > &, label:hover ~ $checked > &,  label:hover ~ $indeterminate > &':
        {
          backgroundColor: theme.palette_alpha.blue[400],
        },
      /* error & (checked | indeterminate) */
      '.Mui-error $checked > &, .Mui-error $indeterminate > &': {
        backgroundColor: theme.palette_alpha.red[600],
      },
      /* error & (checked | indeterminate) & hover */
      '.Mui-error input:hover ~ $checked > &, .Mui-error label:hover ~ $checked > &, .Mui-error input:hover ~ $indeterminate > &, .Mui-error label:hover ~ $indeterminate > &':
        {
          backgroundColor: theme.palette_alpha.red[400],
        },
      /** disabled */
      'input:disabled ~ $root > &&': {
        backgroundColor: theme.palette_alpha.neutral[80],
      },
    },
    /* Styles applied to the check icon. */
    check: {
      position: 'absolute' as const,
      color: theme.palette_alpha.neutral[0],
      left: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      }),
      /** checked */
      '$checked > &': {
        transform: 'scale(1)',
        transition: theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest,
        }),
      },
    },
    /* Styles applied to the dash icon. */
    dash: {
      color: theme.palette_alpha.neutral[0],
      position: 'absolute' as const,
      left: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      }),
      /** indeterminate */
      '$indeterminate > &': {
        transform: 'scale(1)',
        transition: theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest,
        }),
      },
    },
    error: {},
  }),
  { name: 'MuiSpark_alpha_CheckboxIcon' }
);

const CheckboxBox = createSvgIcon(
  <path d="M15 1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h13ZM2 0a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" />,
  'CheckboxBox',
  '0 0 17 17'
);

const CheckboxCheck = createSvgIcon(
  <path d="M13.993 4.185a.75.75 0 0 1 .072 1.058L7.28 13.021a.75.75 0 0 1-1.13 0L2.935 9.337a.75.75 0 0 1 1.13-.986l2.65 3.036 6.22-7.13a.75.75 0 0 1 1.058-.072Z" />,
  'CheckboxCheck',
  '0 0 17 17'
);

const CheckboxDash = createSvgIcon(
  <path d="M3.75 8.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Z" />,
  'CheckboxDash',
  '0 0 17 17'
);

const CheckboxIcon = (props: {
  checked?: boolean;
  indeterminate?: boolean;
}) => {
  const { checked, indeterminate } = props;

  const classes = useStyles();

  return (
    <span
      className={clsx(classes.root, {
        [classes.checked]: checked,
        [classes.indeterminate]: indeterminate,
      })}
    >
      <CheckboxBox className={classes.box} />
      <CheckboxCheck className={classes.check} />
      <CheckboxDash className={classes.dash} />
    </span>
  );
};

export default CheckboxIcon;