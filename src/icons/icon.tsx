import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

interface iconProps {
  children: JSX.Element;
}

interface props {
  color: string;
  fontSize: string;
  contrast: string;
}

function getTextKey(color = 'navy', contrast = 'high') {
  if (color === 'navy' && contrast == 'high') {
    return 'darkContrastText';
  } else if (color === 'navy' && contrast == 'low') {
    return 'darkLowContrastText';
  } else if (color === 'grey' && contrast == 'high') {
    return 'lightContrastText';
  } else if (color === 'grey' && contrast == 'low') {
    return 'lightLowContrastText';
  } else {
    throw new Error('Invalid color or contrast prop');
  }
}

function getFontSize(size = 'default') {
  if (size === 'small') {
    return '20';
  } else if (size === 'default') {
    return '24';
  } else if (size === 'large') {
    return '28';
  } else {
    throw new Error('invalid size for icon');
  }
}

// FIX: theme type & props types
const styles = (theme: any) => ({
  root: (props: props) => ({
    color: theme.palette.background[getTextKey(props.color, props.contrast)],
    fontSize: getFontSize(props.fontSize),
  }),
});

const Icon: FC<iconProps> = ({ children }) => {
  return <SvgIcon viewBox="0 0 24 24">{children}</SvgIcon>;
};

export default withStyles(styles)(Icon);
