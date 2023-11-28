import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import type { PaletteRange } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    brand: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    brand: {
      blue: string;
      lightBlue: string;
    };
  }
}
export const prendaTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        brand: {
          blue: '#0A4872',
          lightBlue: '#D7F3FF',
        },
      },
    },
  },
  fontFamily: {
    body: '"Poppins", sans-serif',
  },
});

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => <CssVarsProvider theme={prendaTheme}>{children}</CssVarsProvider>;
