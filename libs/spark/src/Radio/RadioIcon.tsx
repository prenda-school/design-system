import * as React from 'react';
import clsx from 'clsx';
import styled from '../styled';
import { createSvgIcon } from '../utils';

// Recreation of MUI's internal RadioButton component,
//  but with our icons (bit larger at 26x26, no empty border space)
const RadioIconRoot = styled('span')(({ theme: { palette, transitions } }) => ({
  '&.SparkRadioIcon-root': {
    position: 'relative' as const,
    display: 'flex',
    borderRadius: '50%',
    // Adjust for irregular svg size of radio unchecked button
    height: '26px',
    width: '26px',
    '& [class*=MuiSvgIcon-root]': {
      height: '26px',
      width: '26px',
      backgroundColor: palette.common.white,
    },
    '&:hover, input:hover ~ &, label:hover &': {
      color: palette.text.dark,
      '&.SparkRadioIcon-checked .SparkRadioIcon-dot': {
        color: palette.blue[3],
      },
    },
    '&:focus, input:focus ~ &': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      '&:not(.SparkRadioIcon-checked) .SparkRadioIcon-dot': {
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
}));

// viewBox="0 0 26 26"
const RadioIconCircle = createSvgIcon(
  <path d="M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13Z" />,
  'SparkRadioIconCircle'
);

// viewBox="0 0 26 26"
const RadioIconDot = createSvgIcon(
  <path d="M13 21C17.4183 21 21 17.4183 21 13C21 8.58172 17.4183 5 13 5C8.58172 5 5 8.58172 5 13C5 17.4183 8.58172 21 13 21Z" />,
  'SparkRadioIconDot'
);

export default function RadioIcon({
  checked,
  fontSize,
}: {
  checked?: boolean;
  fontSize?: 'small' | 'default';
}) {
  return (
    <RadioIconRoot
      className={clsx('SparkRadioIcon-root', {
        'SparkRadioIcon-checked': checked,
      })}
    >
      <RadioIconCircle
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 26 26"
        className="SparkRadioIcon-circle"
      />
      <RadioIconDot
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 26 26"
        className="SparkRadioIcon-dot"
      />
    </RadioIconRoot>
  );
}