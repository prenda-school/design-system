import useMuiTheme from '@material-ui/core/styles/useTheme';
import type { Theme } from '../../theme';
import initialTheme from '../../theme/initialTheme';

const useTheme = (): Theme => {
  let theme = useMuiTheme<Theme>();

  if (typeof theme.palette_alpha === 'undefined') {
    theme = initialTheme;
  }

  return theme;
};

export default useTheme;