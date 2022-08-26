import React from 'react';
import { render } from '@testing-library/react';
import { stub } from 'sinon';
import styled from './styled';
import initialTheme from '../theme/initialTheme';

describe('styled', () => {
  const Empty = () => <div />;

  it("should supply Spark's theme by default", () => {
    const styles = stub().returns({});
    const StyledComponent = styled(Empty)(styles);

    render(<StyledComponent />);

    expect(styles.args[0][0].theme).toEqual(initialTheme);
  });
});
