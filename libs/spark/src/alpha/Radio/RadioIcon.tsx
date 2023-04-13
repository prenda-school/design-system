import React from 'react';
import clsx from 'clsx';
import makeStyles from '../../makeStyles';
import createSvgIcon from '../createSvgIcon';

const useStyles = makeStyles<'root' | 'checked' | 'circle' | 'dot'>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      position: 'relative' as const,
      borderRadius: theme.radii_alpha.full,
      color: theme.palette_alpha.neutral[200],
      // Adjust for irregular svg size of radio unchecked button
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
      'input:disabled ~ &&&': {
        boxShadow: theme.shadows_alpha.none, // can be present from `error`
        color: theme.palette_alpha.neutral[90],
      },
    },
    /* Styles applied to the root element when `checked={true}`. */
    checked: {
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
    },
    /* Styles applied to the circle icon element. */
    circle: {
      borderRadius: theme.radii_alpha.full,
      transform: 'scale(1)', // (from Mui) Scale applied to prevent dot misalignment in Safari
      /* hover */
      'input:hover ~ $root > &, label:hover ~ $root > &': {
        backgroundColor: theme.palette_alpha.neutral[70],
      },
      /* checked & hover */
      'input:hover ~ $checked > &, label:hover ~ $checked > &': {
        backgroundColor: 'unset',
      },
      /* focus-visible */
      '.Mui-focusVisible $root > &, input:focus-visible ~ $root > &': {
        backgroundColor: 'unset', // unset Mui default
      },
      /* disabled */
      'input:disabled ~ $root > &': {
        backgroundColor: theme.palette_alpha.neutral[80],
      },
      /* disabled & checked */
      'input:disabled ~ $root$checked > &': {
        backgroundColor: 'unset',
      },
    },
    /* Styles applied to the dot icon element. */
    dot: {
      backgroundColor: 'transparent',
      position: 'absolute' as const,
      left: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      }),
      /* checked */
      '$checked > &': {
        transform: 'scale(1)',
        transition: theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest,
        }),
      },
      /* error */
      '.Mui-error $root > &': {
        color: theme.palette_alpha.red[600],
      },
      /* error & hover */
      '.Mui-error input:hover ~ $root > &, .Mui-error label:hover ~ $root > &':
        {
          color: theme.palette_alpha.red[400],
        },
      /* disabled */
      'input:disabled ~ $root > &&': {
        color: theme.palette_alpha.neutral[90],
      },
    },
    error: {},
  }),
  { name: 'MuiSpark_alpha_RadioIcon' }
);

const RadioCircle = createSvgIcon(
  <path d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0-1a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />,
  'RadioCircle',
  '0 0 17 17'
);

const RadioDot = createSvgIcon(
  <path d="M13.5 8.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  'RadioDot',
  '0 0 17 17'
);

const RadioIcon = (props: { checked?: boolean }) => {
  const { checked } = props;

  const classes = useStyles();

  return (
    <span
      className={clsx(classes.root, {
        [classes.checked]: checked,
      })}
    >
      <RadioCircle className={classes.circle} />
      <RadioDot className={classes.dot} />
    </span>
  );
};

export default RadioIcon;