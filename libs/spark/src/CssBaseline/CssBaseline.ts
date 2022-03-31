import withStyles from '../withStyles';

/**
 * Inject a consistent and simple baseline into the global styles.
 *
 * @example
 *  const MyApp = () => (
 *    <React.Fragment>
 *      <CssBaseline />
 *      // rest of my app
 *    </React.Fragment>
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
        /* :TEMPORARY: remove this after #380 is merged -- will change all stories with text outside of components */
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
    },
  }),
  {
    name: 'MuiSparkCssBaseline',
  }
)(() => null);

export default CssBaseline;
