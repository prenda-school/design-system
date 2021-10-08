import type { CSSProperties } from 'react';
import type { AlertTitleProps, AlertTitleClassKey } from '../AlertTitle';
import AlertTitle from '../AlertTitle';
import withStyles from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SectionMessageTitleProps extends AlertTitleProps {}

export type SectionMessageTitleClassKey = AlertTitleClassKey;

const SectionMessageTitle = withStyles(
  (theme) => ({
    root: {
      ...(theme.typography['label-xl-strong'] as CSSProperties),
      marginTop: 0,
      marginBottom: '1rem',
    },
  }),
  {
    name: 'MuiSparkSectionMessageTitle',
  }
)(AlertTitle);

export default SectionMessageTitle;
