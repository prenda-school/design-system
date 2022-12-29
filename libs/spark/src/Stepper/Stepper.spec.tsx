import { render } from 'compat-testing-library-react-17';
import Step from '../Step';
import Stepper from './Stepper';

describe('Stepper', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Stepper activeStep={0} data-testid="Stepper">
        <Step data-testid="Step1" />
        <Step data-testid="Step2" />
      </Stepper>
    );
    expect(getByTestId('Stepper')).not.toBe(null);
    expect(getByTestId('Step1')).not.toBe(null);
    expect(getByTestId('Step2')).not.toBe(null);
  });
});
