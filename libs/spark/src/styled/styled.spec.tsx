import React from 'react';
import { render } from '@testing-library/react';
import { stub } from 'sinon';
import styled from './styled';
import theme from '../theme';

describe('styled', () => {
  const Empty = () => <div />;

  it('should supply custom theme by default', () => {
    const styles = stub().returns({});
    const StyledComponent = styled(Empty)(styles);

    render(<StyledComponent />);

    expect(styles.args[0][0].theme).toEqual(theme);
  });
});
