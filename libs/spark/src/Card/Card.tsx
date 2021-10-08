import type { CardProps } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default Card;

export type { CardProps };

export const MuiCardDefaultProps = {
  elevation: 2, // E200
};

export const MuiCardStyleOverrides = {
  root: {
    borderRadius: 16,
  },
};
