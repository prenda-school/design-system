import { renderHook } from '@testing-library/react-hooks';
import useTheme from './useTheme';

describe('useTheme', () => {
  it('Can render without ThemeProvider', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toBeTruthy();
    expect(result.current.unstable_borders).toBeTruthy();
    expect(result.current.unstable_palette).toBeTruthy();
    expect(result.current.unstable_typography).toBeTruthy();
  });
});
