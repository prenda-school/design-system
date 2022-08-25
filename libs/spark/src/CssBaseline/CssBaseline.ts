import withStyles from '../withStyles';

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
        backgroundColor: theme.unstable_palette.background.default,
        color: theme.unstable_palette.text.body,
        fontFamily: theme.unstable_typography.fontFamily,
        fontSize: theme.unstable_typography.fontSize,
        margin: 0, // Remove the margin in all browsers.
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white,
        },
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.unstable_palette.background.default,
        },
      },
    },
  }),
  {
    name: 'MuiPDSCssBaseline',
  }
)(() => null);

export default CssBaseline;
