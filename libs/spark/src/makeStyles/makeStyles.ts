import muiMakeStyles from '@material-ui/core/styles/makeStyles';
import type { DefaultTheme } from '../theme';
import initialTheme from '../theme/initialTheme';
import type { ClassNameMap, Styles, WithStylesOptions } from '../withStyles';

export default function makeStyles<
  ClassKey extends string = string,
  Theme = DefaultTheme,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends object = {}
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): keyof Props extends never
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (props?: any) => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey> {
  return muiMakeStyles(styles, {
    defaultTheme: initialTheme,
    ...options,
  });
}
