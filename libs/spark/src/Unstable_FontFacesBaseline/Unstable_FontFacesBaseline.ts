import * as CSS from 'csstype';
import unstable_fontFaces from '../theme/unstable_fontFaces';
import withStyles from '../withStyles';

/**
 * Inject necessary `@font-face` declarations into the global styles.
 *
 * @example
 *  const MyApp = () => (
 *    <React.Fragment>
 *      <Unstable_FontFacesBaseline />
 *      // rest of my app
 *    </React.Fragment>
 */
const Unstable_FontFacesBaseline = withStyles(
  {
    '@global': {
      // cast to avoid error when invoked (<FontFacesBaseline />) from bad typing of `@font-face` key.
      '@font-face': unstable_fontFaces as CSS.AtRule.FontFace,
    },
  },
  { name: 'MuiSparkUnstable_FontFacesBaseline' }
)(() => null);

export default Unstable_FontFacesBaseline;
