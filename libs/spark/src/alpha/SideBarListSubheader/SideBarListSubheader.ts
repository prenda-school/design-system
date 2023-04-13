import ListSubheader, {
  ListSubheaderClassKey,
  ListSubheaderProps,
} from '../ListSubheader';
import withStyles, { Styles } from '../../withStyles';
import { buildVariant } from '../theme/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarListSubheaderProps extends ListSubheaderProps {}

export type SideBarListSubheaderClassKey = ListSubheaderClassKey;

const styles: Styles<SideBarListSubheaderClassKey> = (theme) => ({
  root: {
    ...buildVariant(600, 12, 16, 0.01),
    height: 24,
    marginBottom: 4,
    paddingLeft: 24,
  },
});

const UnstyledSideBarListSubheader = ListSubheader;

const SideBarListSubheader = withStyles(styles, {
  name: 'MuiSpark_alpha_SideBarListSubheader',
})(UnstyledSideBarListSubheader) as typeof UnstyledSideBarListSubheader;

export default SideBarListSubheader;
