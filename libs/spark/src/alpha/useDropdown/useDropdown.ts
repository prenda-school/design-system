import { useContext } from 'react';
import type { DropdownContextValue } from '../DropdownContext';
import DropdownContext from '../DropdownContext';

const useDropdown = (): DropdownContextValue => {
  return useContext(DropdownContext);
};

export default useDropdown;
