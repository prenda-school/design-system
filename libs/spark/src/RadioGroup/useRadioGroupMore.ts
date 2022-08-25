import { useContext } from 'react';
import RadioGroupMoreContext, {
  RadioGroupMoreState,
} from './RadioGroupMoreContext';

export default function useRadioGroupMore(): RadioGroupMoreState | undefined {
  return useContext(RadioGroupMoreContext);
}
