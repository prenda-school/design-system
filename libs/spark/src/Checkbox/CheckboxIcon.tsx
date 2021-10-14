import * as React from 'react';
import clsx from 'clsx';
import styled from '../styled';
import { createSvgIcon } from '../utils';

// Recreation of MUI's internal RadioButton component, but
//  with our icons(bit larger at 22x22, no empty border space)
const CheckboxIconRoot = styled('span')(
  ({ theme: { palette, transitions } }) => ({
    '&.SparkCheckboxIcon-root': {
      position: 'relative' as const,
      display: 'flex',
      borderRadius: 2,
      // Adjust for irregular svg size of checkbox icons
      height: 22,
      width: 22,
      '& [class*=MuiSvgIcon-root]': {
        width: 22,
        height: 22,
      },
      '&:hover, input:hover ~ &, label:hover &': {
        color: palette.text.onLight,
      },
      '&:focus, input:focus ~ &': {
        boxShadow: `0 0 0 4px ${palette.blue[1]}`,
        '&:not(.SparkCheckboxIcon-checked):not(.SparkCheckboxIcon-indeterminate) .SparkCheckboxIcon-box': {
          color: palette.blue[3],
          backgroundColor: palette.common.white,
        },
      },
    },
    '&.SparkCheckboxIcon-checked': {
      '& .SparkCheckboxIcon-check': {
        transform: 'scale(1)',
        color: palette.common.white,
        transition: transitions.create('transform', {
          easing: transitions.easing.easeOut,
          duration: transitions.duration.shortest,
        }),
      },
      '& .SparkCheckboxIcon-box': {
        backgroundColor: palette.blue[3],
      },
    },
    '&.SparkCheckboxIcon-indeterminate': {
      '& .SparkCheckboxIcon-dash': {
        transform: 'scale(1)',
        color: palette.common.white,
        transition: transitions.create('transform', {
          easing: transitions.easing.easeOut,
          duration: transitions.duration.shortest,
        }),
      },
      '& .SparkCheckboxIcon-box': {
        backgroundColor: palette.blue[3],
      },
    },
    '& .SparkCheckboxIcon-box': {
      borderRadius: 2,
      // from Mui, scale applied to prevent dot misalignment in Safari
      transform: 'scale(1)',
    },
    '& .SparkCheckboxIcon-check, & .SparkCheckboxIcon-dash': {
      color: palette.blue[1],
      backgroundColor: 'transparent',
      position: 'absolute' as const,
      left: 0,
      transform: 'scale(0)',
      transition: transitions.create('transform', {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.shortest,
      }),
    },
  })
);

// viewBox="0 0 22 22"
const CheckboxBoxIcon = createSvgIcon(
  <path d="M0 3C0 1.34315 1.34315 0 3 0H19C20.6569 0 22 1.34315 22 3V19C22 20.6569 20.6569 22 19 22H3C1.34315 22 0 20.6569 0 19V3ZM3 2C2.44772 2 2 2.44772 2 3V19C2 19.5523 2.44772 20 3 20H19C19.5523 20 20 19.5523 20 19V3C20 2.44772 19.5523 2 19 2H3Z" />,
  'SparkCheckboxBoxIcon'
);

// viewBox="0 0 22 22"
const CheckboxCheckIcon = createSvgIcon(
  <path d="M16.8401 6.44714C17.1455 6.72703 17.1661 7.20146 16.8862 7.5068L9.55286 15.5068C9.41463 15.6576 9.2208 15.7454 9.01628 15.7498C8.81177 15.7543 8.61431 15.675 8.46966 15.5303L5.13633 12.197C4.84343 11.9041 4.84343 11.4292 5.13633 11.1363C5.42922 10.8434 5.90409 10.8434 6.19699 11.1363L8.97643 13.9158L15.7805 6.49321C16.0604 6.18787 16.5348 6.16724 16.8401 6.44714Z" />,
  'SparkCheckboxCheckIcon'
);

// viewBox="0 0 22 22"
const CheckboxIndeterminateIcon = createSvgIcon(
  <path d="M6 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10H6C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12Z" />,
  'SparkCheckboxIndeterminateIcon'
);

export default function CheckboxIcon({
  checked,
  indeterminate,
  fontSize,
}: {
  checked?: boolean;
  indeterminate?: boolean;
  fontSize?: 'small' | 'default';
}) {
  return (
    <CheckboxIconRoot
      className={clsx('SparkCheckboxIcon-root', {
        'SparkCheckboxIcon-checked': checked,
        'SparkCheckboxIcon-indeterminate': indeterminate,
      })}
    >
      <CheckboxBoxIcon
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 22 22"
        className="SparkCheckboxIcon-box"
      />
      <CheckboxCheckIcon
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 22 22"
        className="SparkCheckboxIcon-check"
      />
      <CheckboxIndeterminateIcon
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 22 22"
        className="SparkCheckboxIcon-dash"
      />
    </CheckboxIconRoot>
  );
}
