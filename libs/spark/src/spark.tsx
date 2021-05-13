import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SparkProps {}

const StyledSpark = styled.div`
  color: pink;
`;

export function Spark(props: SparkProps) {
  return (
    <StyledSpark>
      <h1>Welcome to spark!</h1>
    </StyledSpark>
  );
}

export default Spark;
