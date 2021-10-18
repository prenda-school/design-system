import * as React from 'react';
import { default as Alert, AlertProps, AlertClassKey } from '../Alert';
import IconButton from '../IconButton';
import { Cross } from '../internal';
import withStyles from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SectionMessageProps extends Omit<AlertProps, 'variant'> {}

export type SectionMessageClassKey = AlertClassKey;

const CustomIconButton = withStyles((theme) => ({
  root: {
    color: 'inherit',
    padding: 4,
    '&:focus, &:active': {
      color: theme.palette.text.dark,
    },
  },
}))(IconButton);

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
};

export default withStyles(
  (theme) => ({
    root: {
      borderRadius: 8,
      padding: 24,
      color: theme.palette.text.dark,
    },
    action: {
      alignItems: 'flex-start',
      marginTop: -4,
    },
    standardInfo: {
      backgroundColor: theme.palette.blue[1],
      '& $icon': {
        color: theme.palette.blue[2],
      },
    },
    standardSuccess: {
      backgroundColor: theme.palette.green[1],
      '& $icon': {
        color: theme.palette.green[2],
      },
    },
    standardWarning: {
      backgroundColor: theme.palette.yellow[1],
      '& $icon': {
        color: theme.palette.text.dark,
      },
    },
    standardError: {
      backgroundColor: theme.palette.red[1],
      '& $icon': {
        color: theme.palette.red[2],
      },
    },
    icon: {
      fontSize: theme.typography.pxToRem(24),
      opacity: 1,
      marginRight: 16,
      padding: 0,
    },
    message: {
      ...(theme.typography['paragraph-lg'] as React.CSSProperties),
      padding: '2px 0',
    },
  }),
  { name: 'MuiSparkSectionMessage' }
)(({ onClose, closeText, ...other }: SectionMessageProps) => {
  let Action = null;
  if (onClose) {
    Action = () => (
      <actionMapping.Close onClose={onClose} closeText={closeText} />
    );
  }

  return (
    <Alert action={Action ? <Action /> : null} {...other} variant="standard" />
  );
});
