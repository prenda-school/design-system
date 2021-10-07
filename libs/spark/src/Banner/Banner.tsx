import * as React from 'react';
import type { CSSProperties } from 'react';
import type { AlertProps, AlertClassKey } from '../Alert';
import Alert from '../Alert';
import Button from '../Button/Button';
import IconButton from '../IconButton';
import { ArrowRight, Cross } from '../internal';
import withStyles from '../withStyles';

export interface BannerProps extends Omit<AlertProps, 'variant'> {
  /**
   * Override the default label for the *details popup* button.
   */
  detailsText?: string;
  /**
   * Callback fired when the component requests to go to details.
   * When provided and no `action` prop is set, a details  button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onDetails?: (event: React.SyntheticEvent) => void;
}

export type BannerClassKey = AlertClassKey;

const CustomIconButton = withStyles((theme) => ({
  root: {
    color: 'inherit',
    padding: 4,
    '&:focus, &:active': {
      color: theme.palette.text.onLight,
    },
  },
}))(IconButton);

const CustomButton = withStyles((theme) => ({
  root: {
    borderColor: 'transparent',
    padding: 4,
    '&:focus, &:active': {
      color: theme.palette.text.onLight,
    },
  },
}))(Button);

const actionMapping = {
  Close: ({ closeText, onClose }) => (
    <CustomIconButton
      aria-label={closeText}
      title={closeText}
      color="inherit"
      variant="text"
      onClick={onClose}
    >
      <Cross fontSize="inherit" />
    </CustomIconButton>
  ),
  Details: ({ detailsText = 'Details', onDetails }) => (
    <CustomButton
      color="inherit"
      variant="text"
      onClick={onDetails}
      endIcon={<ArrowRight />}
    >
      {detailsText}
    </CustomButton>
  ),
};

const Banner = withStyles(
  (theme) => ({
    root: {
      borderRadius: 0,
      padding: '15px 24px',
    },
    filledInfo: {
      backgroundColor: theme.palette.blue[2],
    },
    filledSuccess: {
      backgroundColor: theme.palette.green[2],
    },
    filledWarning: {
      backgroundColor: theme.palette.yellow[2],
      color: theme.palette.text.onLight,
    },
    filledError: {
      backgroundColor: theme.palette.red[2],
    },
    icon: {
      fontSize: theme.typography.pxToRem(24),
      opacity: 1,
      marginRight: 8,
    },
    message: {
      ...(theme.typography['label-lg-strong'] as CSSProperties),
      padding: '9px 0',
    },
  }),
  {
    name: 'MuiSparkBanner',
  }
)(({ onClose, closeText, onDetails, detailsText, ...other }: BannerProps) => {
  let Action = null;
  if (onClose) {
    Action = () => (
      <actionMapping.Close onClose={onClose} closeText={closeText} />
    );
  } else if (onDetails) {
    Action = () => (
      <actionMapping.Details onDetails={onDetails} detailsText={detailsText} />
    );
  }

  return (
    <Alert action={Action ? <Action /> : null} {...other} variant="filled" />
  );
});

export default Banner;
