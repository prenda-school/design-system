import { renderHook } from '@testing-library/react-hooks';
import useTheme from './useTheme';

describe('useTheme', () => {
  it('Can render without ThemeProvider', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toBeTruthy();
    expect(result.current.borders_alpha).toBeTruthy();
    expect(result.current.palette_alpha).toBeTruthy();
    expect(result.current.typography_alpha).toBeTruthy();
  });
});
