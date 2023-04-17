import type * as CSS from 'csstype';
import fontFaces from '../theme/fontFaces';
import withStyles from '../withStyles';

/**
 * Inject necessary `@font-face` declarations into the global styles.
 *
 * @deprecated
 * @example
 *  const MyApp = () => (
 *    <>
 *      <FontFacesBaseline />
 *      // rest of my app
 *    </>
 *  )
 */
const FontFacesBaseline = withStyles(
  {
    '@global': {
      // cast to avoid error when invoked (<FontFacesBaseline />) from bad typing of `@font-face` key.
      '@font-face': fontFaces as CSS.AtRule.FontFace,
    },
  },
  { name: 'MuiSparkFontFacesBaseline' }
)(() => null);

export default FontFacesBaseline;
