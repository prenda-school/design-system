import { CardClassKey, CardProps } from './Card';
import { StyleRules } from '../withStyles';

export const MuiCardDefaultProps: Partial<CardProps> = {
  elevation: 2, // E200
};

export const MuiCardStyleOverrides: Partial<StyleRules<CardClassKey>> = {
  root: {
    borderRadius: 16,
  },
};
