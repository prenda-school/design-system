import { renderHook } from '@testing-library/react-hooks';
import useTheme_unstable from './useTheme_unstable';

describe('useTheme_unstable', () => {
  it('Can render without ThemeProvider', () => {
    const { result } = renderHook(() => useTheme_unstable());

    expect(result.current).toBeTruthy();
    expect(result.current.unstable_borders).toBeTruthy();
    expect(result.current.unstable_palette).toBeTruthy();
    expect(result.current.unstable_typography).toBeTruthy();
  });
});