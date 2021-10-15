import type { SvgIconClassKey } from './SvgIcon';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

// :NOTE: Duotone fill selector is & > *[fill="#F0F1F2"]
export const MuiSvgIconStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<SvgIconClassKey>> => ({
  root: {
    // fontSizeDefault/Medium
    fontSize: '1.5rem', // 24px
    // contrastHigh is `opacity: 1` which is just the default CSS value
    '&.SparkSvgIcon-contrastLow': {
      opacity: 0.72,
    },
    // custom colors
    '&.SparkSvgIcon-colorSuccess': {
      color: palette.green[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.green[1],
        opacity: 0.72,
      },
    },
    '&.SparkSvgIcon-colorWarning': {
      color: palette.yellow[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.yellow[1],
        opacity: 0.72,
      },
    },
    '&.SparkSvgIcon-colorInfo': {
      color: palette.blue[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.blue[1],
        opacity: 0.72,
      },
    },
    '&.SparkSvgIcon-colorWhite': {
      color: palette.common.white,
      '& > *[fill="#F0F1F2"]': {
        opacity: 0.72,
      },
    },
  },
  fontSizeSmall: {
    fontSize: '1rem', // 16px
  },
  fontSizeLarge: {
    fontSize: '2rem', // 32px
  },
  colorPrimary: {
    color: palette.text.dark,
  },
  colorSecondary: {
    color: palette.text.light,
    '& > *[fill="#F0F1F2"]': {
      opacity: 0.72,
    },
  },
  colorError: {
    color: palette.red[2],
    '& > *[fill="#F0F1F2"]': {
      fill: palette.red[1],
      opacity: 0.72,
    },
  },
});
