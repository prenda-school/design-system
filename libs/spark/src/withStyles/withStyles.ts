import {
  default as muiWithStyles,
  StyledComponentProps,
  Styles,
  WithStyles,
  WithStylesOptions,
} from '@material-ui/core/styles/withStyles';
import { PropInjector } from '@material-ui/types';
import theme, { Theme } from '../theme';

export * from '@material-ui/core/styles/withStyles';

export default function withStyles<
  ClassKey extends string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Options extends WithStylesOptions<Theme> = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends object = {}
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Options
): PropInjector<
  WithStyles<ClassKey, Options['withTheme']>,
  StyledComponentProps<ClassKey> & Props
> {
  return muiWithStyles(styles, {
    defaultTheme: theme,
    ...options,
  });
}
