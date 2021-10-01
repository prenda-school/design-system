import type { CardActionsProps } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';

export default CardActions;

export type { CardActionsProps };

export const MuiCardActionsStyleOverrides = {
  root: {
    padding: 24,
    justifyContent: 'flex-end',
  },
};
