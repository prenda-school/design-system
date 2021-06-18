import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {}

const StyledCard = styled.div`
  color: pink;
`;

export function Card(props: CardProps) {
  return (
    <StyledCard>
      <h1>Welcome to Card!</h1>
    </StyledCard>
  );
}

export default Card;
