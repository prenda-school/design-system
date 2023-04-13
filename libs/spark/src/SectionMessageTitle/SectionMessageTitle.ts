import type { CSSProperties } from 'react';
import {
  default as AlertTitle,
  AlertTitleProps,
  AlertTitleClassKey,
} from '../AlertTitle';
import withStyles from '../withStyles';

/** @deprecated */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SectionMessageTitleProps extends AlertTitleProps {}

/** @deprecated */
export type SectionMessageTitleClassKey = AlertTitleClassKey;

/** @deprecated */
export default withStyles(
  (theme) => ({
    root: {
      ...(theme.typography['label-xl-strong'] as CSSProperties),
      marginTop: 0,
      marginBottom: '1rem',
    },
  }),
  { name: 'MuiSparkSectionMessageTitle' }
)(AlertTitle);
