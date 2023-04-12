import { useContext } from 'react';
import RadioGroupExtraContext from '../RadioGroupExtraContext';

const useRadioGroupExtra = () => {
  return useContext(RadioGroupExtraContext);
};

export default useRadioGroupExtra;
