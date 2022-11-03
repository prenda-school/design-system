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
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.dark,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        lineHeight: theme.typography['paragraph-md'].lineHeight,
        margin: 0, // Remove the margin in all browsers.
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white,
        },
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default,
        },
      },
      '@media (prefers-reduced-motion: reduce)': {
        '*': {
          animationDuration: '0.001ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.001ms !important',
        },
      },
    },
  }),
  {
    name: 'MuiSparkCssBaseline',
  }
)(() => null);

export default CssBaseline;
