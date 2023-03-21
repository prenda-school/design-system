import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery_unstable from './useMediaQuery_unstable';

describe('useMediaQuery_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { result } = renderHook(() =>
      useMediaQuery_unstable((theme) => theme.breakpoints.down('sm'))
    );

    expect(typeof result.current).toEqual('boolean');
  });
});
