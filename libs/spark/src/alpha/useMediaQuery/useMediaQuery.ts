import useMuiMediaQuery, { Options } from '@material-ui/core/useMediaQuery';
import type { Theme } from '../../theme';
import useTheme from '../useTheme';

const useMediaQuery = (
  queryInput: string | ((theme: Theme) => string),
  options: Options = {}
): boolean => {
  const theme = useTheme();

  const query =
    typeof queryInput === 'function' ? queryInput(theme) : queryInput;

  return useMuiMediaQuery(query, options);
};

export default useMediaQuery;
