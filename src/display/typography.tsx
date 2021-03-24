import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MuiTypography, { TypographyProps as MuiTypographyProps } from "@material-ui/core/Typography";
import clsx from 'clsx';
import { capitalize } from '../utils';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    color: theme.palette.text.primary
  },
  displayLarge: {
    fontSize: '4rem',
    lineHeight: '4rem',
  },
  displayMedium: {
    fontSize: '3.5rem',
    lineHeight: '3.5rem',
  },
  displaySmall: {
    fontSize: '3rem',
    lineHeight: '3rem',
  }
})
);

export type TypographyProps = {
  className: string,
  variant: undefined | 'inherit' | 'display', // | 'heading' | 'smallCaps' | 'label' | 'paragraph',
  size: 'large' | 'medium' | 'small' | undefined,
};

export const Typography: React.FC<TypographyProps> = (props) => {
  const { className, variant="paragraph", size='medium', ...other } = props;
  
  const classes = useStyles();

  return (
    <MuiTypography
      {...other}
      className={clsx(
        classes.root,
        {
          // @ts-ignore
          [classes[`${variant}${capitalize(size)}`]]: variant !== 'inherit',
        },
        className
      )}
    />
  )
}

Typography.propTypes = {
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'display',
    'inherit',
    // 'heading',
    // 'smallCaps',
    // 'label',
    // 'paragraph'
  ]),
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small'
  ])
}