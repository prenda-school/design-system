import {
  default as muiStyled,
  StyledProps,
} from '@material-ui/core/styles/styled';
import { ComponentProps, ComponentType, ElementType } from 'react';
import theme, { DefaultTheme } from '../theme';
import {
  CreateCSSProperties,
  StyledComponentProps,
  WithStylesOptions,
} from '../withStyles';

export type { StyledProps };

export type ComponentCreator<Component extends ElementType> = <
  Theme = DefaultTheme,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends {} = {}
>(
  styles:
    | CreateCSSProperties<Props>
    | ((props: { theme: Theme } & Props) => CreateCSSProperties<Props>),
  options?: WithStylesOptions<Theme>
) => ComponentType<
  Omit<
    JSX.LibraryManagedAttributes<Component, ComponentProps<Component>>,
    'classes' | 'className'
  > &
    StyledComponentProps<'root'> & { className?: string } & (Props extends {
      theme: Theme;
    }
      ? Omit<Props, 'theme'> & { theme?: Theme }
      : Props)
>;

const styled = <Component extends ElementType>(
  Component: Component
): ComponentCreator<Component> => {
  const componentCreator = muiStyled(Component);

  return (styles, options) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Unintelligable "Type ... is not assignable to type ..." cascade during Storybook compilation
    componentCreator(styles, {
      defaultTheme: theme,
      ...options,
    });
};
export default styled;
