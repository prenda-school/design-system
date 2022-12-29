import { render } from 'compat-testing-library-react-17';
import StepConnector from './StepConnector';

describe('StepConnector', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <StepConnector data-testid="StepConnector" />
    );
    expect(getByTestId('StepConnector')).not.toBe(null);
  });
});
