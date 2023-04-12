import ListSubheader, {
  ListSubheaderClassKey,
  ListSubheaderProps,
} from '../ListSubheader';
import withStyles, { Styles } from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarListSubheaderProps extends ListSubheaderProps {}

export type SideBarListSubheaderClassKey = ListSubheaderClassKey;

const styles: Styles<SideBarListSubheaderClassKey> = {
  root: {
    paddingLeft: 24,
    height: 24,
    marginBottom: 4,
  },
};

const UnstyledSideBarListSubheader = ListSubheader;

const SideBarListSubheader = withStyles(styles, {
  name: 'MuiSpark_alpha_SideBarListSubheader',
})(UnstyledSideBarListSubheader) as typeof UnstyledSideBarListSubheader;

export default SideBarListSubheader;
