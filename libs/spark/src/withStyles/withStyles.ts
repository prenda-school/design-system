import { PropInjector } from '@material-ui/types';
import {
  default as muiWithStyles,
  StyledComponentProps,
  Styles,
  WithStyles,
  WithStylesOptions,
} from '@material-ui/core/styles/withStyles';
import type { Theme } from '../theme';
import initialTheme from '../theme/initialTheme';

// enumerate all exports since `tsc` incorrectly identifies the re-exports in '@material-ui/core/styles/withStyles' as JS objects and not TS types.
export type {
  CreateCSSProperties,
  CSSProperties,
  ClassNameMap,
  StyledComponentProps,
  Styles,
  WithStylesOptions,
  StyleRulesCallback,
  BaseCSSProperties,
  StyleRules,
  WithStyles,
} from '@material-ui/core/styles/withStyles';

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
    defaultTheme: initialTheme,
    ...options,
  });
}
