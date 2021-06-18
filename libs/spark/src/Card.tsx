import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import MUICard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/* eslint-disable-next-line */
export interface CardProps {
  elevation?: number;
  children?: JSX.Element | Array<JSX.Element>;
}

const StyledCard = withStyles({
  root: {
    borderRadius: '16px',
    padding: '0',
  },
})(MUICard);

const StyledCardContent = withStyles({
  root: {
    margin: '24px',
    padding: '0 !important', // due to original :last-child rule
    '&> img:first-child': {
      margin: '-24px',
      marginBottom: '0',
      width: 'calc(100% + 48px)',
      objectFit: 'cover',
      objectPosition: 'center',
      maxHeight: '300px',
    },
  },
})(CardContent);

export function Card(props: CardProps) {
  return (
    <StyledCard elevation={props.elevation || 4}>
      <StyledCardContent>{props.children}</StyledCardContent>
    </StyledCard>
  );
}
