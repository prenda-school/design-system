import { render } from 'compat-testing-library-react-17';
import StepButton from './StepButton';

describe('StepButton', () => {
  it('renders with role of button by default', () => {
    const { getByRole } = render(<StepButton />);
    expect(getByRole('button')).not.toBe(null);
  });

  it('can render with role of link; is as overridable component', () => {
    const { getByRole } = render(
      <StepButton component="a" href="https://www.prenda.com" />
    );
    expect(getByRole('link')).not.toBe(null);
  });
});
