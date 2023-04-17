import type { PropInjector } from '@material-ui/types';
import type {
  BaseCSSProperties,
  ClassNameMap,
  CreateCSSProperties,
  CSSProperties,
  StyledComponentProps,
  Styles as MuiStyles,
  StyleRules,
  StyleRulesCallback,
  WithStyles,
  WithStylesOptions,
} from '@material-ui/core/styles/withStyles';
import { default as muiWithStyles } from '@material-ui/core/styles/withStyles';
import type { DefaultTheme, Theme } from '../theme';
import initialTheme from '../theme/initialTheme';

type Styles<
  ClassKey extends string = string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends object = {},
  Theme = DefaultTheme
> = MuiStyles<
  Theme,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props,
  ClassKey
>;

// enumerate all exports since `tsc` incorrectly identifies the re-exports in '@material-ui/core/styles/withStyles' as JS objects and not TS types.
export type {
  BaseCSSProperties,
  ClassNameMap,
  CreateCSSProperties,
  CSSProperties,
  StyledComponentProps,
  Styles,
  StyleRules,
  StyleRulesCallback,
  WithStyles,
  WithStylesOptions,
};

export default function withStyles<
  ClassKey extends string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Options extends WithStylesOptions<Theme> = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends object = {}
>(
  styles: Styles<ClassKey, Props>,
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
