import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from './useMediaQuery';

describe('useMediaQuery', () => {
  it('Can render without ThemeProvider', () => {
    const { result } = renderHook(() =>
      useMediaQuery((theme) => theme.breakpoints.down('sm'))
    );

    expect(typeof result.current).toEqual('boolean');
  });
});
