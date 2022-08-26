import { render } from '@testing-library/react';
import StepConnector from './StepConnector';

describe('StepConnector', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <StepConnector data-testid="StepConnector" />
    );
    expect(getByTestId('StepConnector')).not.toBe(null);
  });
});
