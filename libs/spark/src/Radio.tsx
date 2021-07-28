import * as React from 'react';
import { createSvgIcon, styled } from '@material-ui/core';
import clsx from 'clsx';
import { palette } from './styles/palette';
import { Theme } from '@material-ui/core';

// Recreation of Material-UI's internal RadioButton component,
//  but with our icons (bit larger at 26x26, no empty border space)
const SparkRadioIconRoot = styled('span')(
  ({ theme: { palette, transitions } }: { theme: Theme }) => ({
    '&.SparkRadioIcon-root': {
      position: 'relative' as const,
      display: 'flex',
      borderRadius: '50%',
      // Adjust for irregular svg size of radio unchecked button
      height: '26px',
      width: '26px',
      '& .MuiSvgIcon-root': {
        height: '26px',
        width: '26px',
        backgroundColor: palette.common.white,
      },
      '&:hover, input:hover ~ &, label:hover &': {
        color: palette.text.onLight,
        '&.SparkRadioIcon-checked .SparkRadioIcon-dot': {
          color: palette.blue[3],
        },
      },
      '&:focus, input:focus ~ &': {
        boxShadow: `0 0 0 4px ${palette.blue[1]}`,
        '&:not(.SparkRadioIcon-checked) .MuiSvgIcon-root.SparkRadioIcon-dot': {
          color: palette.blue[1],
        },
        '& .SparkRadioIcon-checked .SparkRadioIcon-dot': {
          color: palette.blue[3],
        },
      },
      '&.SparkRadioIcon-checked .SparkRadioIcon-dot': {
        transform: 'scale(1)',
        transition: transitions.create('transform', {
          easing: transitions.easing.easeOut,
          duration: transitions.duration.shortest,
        }),
      },
      '& .SparkRadioIcon-circle': {
        borderRadius: '50%',
        // (from Mui) Scale applied to prevent dot misalignment in Safari
        transform: 'scale(1)',
      },
      '& .SparkRadioIcon-dot': {
        backgroundColor: 'transparent',
        position: 'absolute' as const,
        left: 0,
        transform: 'scale(0)',
        transition: transitions.create('transform', {
          easing: transitions.easing.easeIn,
          duration: transitions.duration.shortest,
        }),
      },
    },
  })
);

// viewBox="0 0 26 26"
const SparkRadioIconCircle = createSvgIcon(
  <path d="M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13Z" />,
  'SparkRadioIconCircle'
);

// viewBox="0 0 26 26"
const SparkRadioIconDot = createSvgIcon(
  <path d="M13 21C17.4183 21 21 17.4183 21 13C21 8.58172 17.4183 5 13 5C8.58172 5 5 8.58172 5 13C5 17.4183 8.58172 21 13 21Z" />,
  'SparkRadioIconDot'
);

function SparkRadioButtonIcon({
  checked,
  fontSize,
}: {
  checked?: boolean;
  fontSize?: 'small' | 'default';
}) {
  return (
    <SparkRadioIconRoot
      className={clsx('SparkRadioIcon-root', {
        'SparkRadioIcon-checked': checked,
      })}
    >
      <SparkRadioIconCircle
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 26 26"
        className="SparkRadioIcon-circle"
      />
      <SparkRadioIconDot
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 26 26"
        className="SparkRadioIcon-dot"
      />
    </SparkRadioIconRoot>
  );
}

export const MuiRadioStyleOverrides = {
  root: {
    // Split 8px of padding / margin so icon can use background-color instead of box-shadow
    padding: '4px',
    margin: '4px',
    // Clear Mui's primary/secondary color bgcolor
    backgroundColor: 'unset',
    color: palette.grey.dark,
    '&:hover': {
      color: palette.text.onLight,
      backgroundColor: 'unset',
    },
    '&:focus, &.Mui-focusVisible': {
      color: palette.blue[3],
      backgroundColors: palette.blue[1],
    },
    '&$checked': {
      color: palette.blue[3],
    },
    '&$disabled': {
      '& > .MuiIconButton-label > .SparkRadioIcon-root': {
        '& > .MuiSvgIcon-root': {
          color: palette.grey.dark,
        },
        '& > .SparkRadioIcon-circle': {
          backgroundColor: palette.grey.medium,
        },
        '& > .SparkRadioIcon-dot': {
          color: palette.grey[400],
        },
      },
    },
  },
};

export const MuiRadioDefaultProps = {
  color: 'default' as const,
  icon: <SparkRadioButtonIcon />,
  checkedIcon: <SparkRadioButtonIcon checked />,
};
