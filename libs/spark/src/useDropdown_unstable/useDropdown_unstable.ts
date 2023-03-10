import { useContext } from 'react';
import Unstable_DropdownContext, {
  Unstable_DropdownContextValue,
} from '../Unstable_DropdownContext';

const useDropdown_unstable = (): Unstable_DropdownContextValue => {
  return useContext(Unstable_DropdownContext);
};

export default useDropdown_unstable;
