import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { prendaTheme } from '../theme/theme';

interface iconProps {
  children: JSX.Element;
  color: string;
  fontSize: string;
  contrast: string;
}

const useStyles = makeStyles({
  icon: (props: iconProps) => ({
    color:
      prendaTheme.palette.background[getTextKey(props.color, props.contrast)],
    fontSize: getFontSize(props.fontSize),
  }),
});

function getTextKey(color = 'navy', contrast = 'high') {
  if (color === 'navy' && contrast == 'high') {
    return 'lightContrastText';
  } else if (color === 'navy' && contrast == 'low') {
    return 'lightLowContrastText';
  } else if (color === 'grey' && contrast == 'high') {
    return 'darkContrastText';
  } else if (color === 'grey' && contrast == 'low') {
    return 'darkLowContrastText';
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

export const Icon: FC<iconProps> = props => {
  const styles = useStyles(props);
  return (
    <SvgIcon viewBox="0 0 24 24" className={styles.icon}>
      {props.children}
    </SvgIcon>
  );
};
