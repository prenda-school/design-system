import { render } from 'compat-testing-library-react-17';
import StepLabel from './StepLabel';

describe('StepLabel', () => {
  it('renders icon and label', () => {
    const { getByText } = render(<StepLabel icon={1}>Label</StepLabel>);
    expect(getByText('1')).not.toBe(null);
    expect(getByText('Label')).not.toBe(null);
  });

  it('can render just an accessible icon', () => {
    const { getByText, getByTitle } = render(
      <StepLabel icon={1} StepIconProps={{ titleAccess: 'Step one' }} />
    );
    expect(getByText('1')).not.toBe(null);
    expect(getByTitle('Step one')).not.toBe(null);
  });
});
