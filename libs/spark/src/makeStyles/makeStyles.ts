import muiMakeStyles from '@material-ui/core/styles/makeStyles';
import theme, { DefaultTheme } from '../theme';
import type { ClassNameMap, Styles, WithStylesOptions } from '../withStyles';

export default function makeStyles<
  ClassKey extends string = string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends object = {},
  Theme = DefaultTheme
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): keyof Props extends never
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (props?: any) => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey> {
  return muiMakeStyles(styles, {
    defaultTheme: theme,
    ...options,
  });
}
