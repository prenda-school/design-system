import { useContext } from 'react';
import DropdownContext, { DropdownContextValue } from '../DropdownContext';

const useDropdown = (): DropdownContextValue => {
  return useContext(DropdownContext);
};

export default useDropdown;
