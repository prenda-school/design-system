import withStyles from '../../withStyles';

/**
 * Inject a consistent and simple baseline into the global styles.
 *
 * @example
 *  const MyApp = () => (
 *    <>
 *      <CssBaseline />
 *      // rest of my app
 *    </>
 *  )
 */
const CssBaseline = withStyles(
  (theme) => ({
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        backgroundColor: theme.palette_alpha.background.default,
        color: theme.palette_alpha.text.body,
        fontFamily: theme.typography_alpha.fontFamily,
        fontSize: theme.typography_alpha.fontSize,
        margin: 0, // Remove the margin in all browsers.
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white,
        },
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette_alpha.background.default,
        },
      },
    },
  }),
  {
    name: 'MuiSpark_alpha_CssBaseline',
  }
)(() => null);

export default CssBaseline;
