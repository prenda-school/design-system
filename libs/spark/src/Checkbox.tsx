import React, { FC } from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  createSvgIcon,
} from '@material-ui/core';
import { FormControlLabelProps as MuiFormControlLabelProps } from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import clsx from 'clsx';

// Recreation of Material-UI's internal RadioButton component, but with our icons (bit larger at 22x22, no empty border space)
const StyledSpan = styled.span`
  ${({ theme }) => `
    position: relative;
    display: flex;
    border-radius: 2px;

    // Adjust for irregular svg size of checkbox icons 
    height: 22px;
    width: 22px;
    & .MuiSvgIcon-root{
      width: 22px;
      height: 22px;
      background-color: white;
    }
    label:hover & {
      color: ${theme.palette.tertiary.blue[3]};
      :not(.SparkCheckboxIcon-checked) {
        color: ${theme.palette.background.lightContrastText};
      }
    }
    input:focus ~ & {
      // color: ${theme.palette.background.lightContrastText};
      box-shadow: 0 0 0 4px ${theme.palette.tertiary.blue[1]};

      &:not(.SparkCheckboxIcon-checked) .MuiSvgIcon-root {
        transform: scale(1);
        transition: ${theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.shortest,
        })};
        &.SparkCheckboxIcon-box {
          color: ${theme.palette.tertiary.blue[3]};
          background-color: white;
        }
        &.SparkCheckboxIcon-checkmark {
          color: ${theme.palette.tertiary.blue[1]};
        }
      }
    }

    &.SparkCheckboxIcon-checked {
      .MuiSvgIcon-root.SparkCheckboxIcon-checkmark {
        transform: scale(1);
        color: white;
        transition: ${theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest,
        })};
      }
      .MuiSvgIcon-root.SparkCheckboxIcon-box {
        background-color: ${theme.palette.tertiary.blue[3]};
      }
    }
    
    & .MuiSvgIcon-root.SparkCheckboxIcon-box {
      border-radius: 2px;
      // (M-UI) Scale applied to prevent dot misalignment in Safari
      transform: scale(1);
    }
    & .MuiSvgIcon-root.SparkCheckboxIcon-checkmark {
      color: ${theme.palette.tertiary.blue[1]};
      background-color: transparent;
      position: absolute;
      left: 0;
      transform: scale(0);
      transition: ${theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      })};
    }
    
  `}
`;

// viewBox="0 0 22 22"
const SparkCheckboxUncheckedIcon = createSvgIcon(
  <path d="M0 3C0 1.34315 1.34315 0 3 0H19C20.6569 0 22 1.34315 22 3V19C22 20.6569 20.6569 22 19 22H3C1.34315 22 0 20.6569 0 19V3ZM3 2C2.44772 2 2 2.44772 2 3V19C2 19.5523 2.44772 20 3 20H19C19.5523 20 20 19.5523 20 19V3C20 2.44772 19.5523 2 19 2H3Z" />,
  'SparkCheckboxUnchecked'
);

// viewBox="0 0 22 22"
const SparkCheckboxCheckedIcon = createSvgIcon(
  <path d="M16.3688 7.90059C16.5321 8.08198 16.5246 8.35956 16.3517 8.53188L10.1972 14.6667C10.014 14.8492 9.71625 14.8443 9.53933 14.6557L5.95831 10.8389C5.79131 10.6609 5.7931 10.3833 5.96238 10.2074L6.69923 9.44209C6.88114 9.25314 7.1842 9.2551 7.36366 9.44637L9.90778 12.158L14.9914 7.09063C15.1772 6.90548 15.4801 6.91366 15.6556 7.10856L16.3688 7.90059Z" />,
  'SparkCheckboxChecked'
);

function SparkCheckboxIcon(props: {
  checked?: boolean;
  fontSize?: 'small' | 'default';
}) {
  const { checked, fontSize } = props;

  return (
    <StyledSpan
      className={clsx('SparkCheckboxIcon-root', {
        'SparkCheckboxIcon-checked': checked,
      })}
    >
      <SparkCheckboxUncheckedIcon
        fontSize={fontSize}
        viewBox="0 0 22 22"
        className="SparkCheckboxIcon-box"
      />
      <SparkCheckboxCheckedIcon
        fontSize={fontSize}
        viewBox="0 0 22 22"
        className="SparkCheckboxIcon-checkmark"
      />
    </StyledSpan>
  );
}

// End custom checkbox icons, Begin Checkbox component

export interface CheckboxProps
  extends Omit<MuiFormControlLabelProps, 'control'> {
  ControlCheckboxProps?: MuiCheckboxProps;
}

const Checkbox = styled(MuiCheckbox)`
  ${({ theme }) => `
    &.MuiCheckbox-root {
      padding: 0.5rem; // 8px
      background-color: unset;
      border-radius: 8px;

      &:hover {
        color: ${theme.palette.background.lightContrastText};
        background-color: unset;
      }
      
      &.Mui-checked {
        color: ${theme.palette.tertiary.blue[3]};
      }
      &.Mui-disabled {
        & .MuiSvgIcon-root {
          background-color: ${theme.palette.neutral.mediumGrey};
          color: ${theme.palette.neutral.darkGrey};
        }
      }
    }
  `}
`;

export const SparkCheckbox: FC<CheckboxProps> = (props) => {
  const { ControlCheckboxProps, ...other } = props;

  return (
    <FormControlLabel
      {...other}
      control={
        <Checkbox
          icon={<SparkCheckboxIcon />}
          checkedIcon={<SparkCheckboxIcon checked />}
          disableRipple={true}
          {...ControlCheckboxProps}
        />
      }
    />
  );
};

export { SparkCheckbox as Checkbox };
