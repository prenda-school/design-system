import { render } from 'compat-testing-library-react-17';
import StepContent from './StepContent';

describe('StepContent', () => {
  it('renders in vertical orientation and expanded', () => {
    const { queryByText } = render(
      // @ts-expect-error Property 'orientation' does not exist on type ...
      <StepContent orientation="vertical" expanded>
        Content
      </StepContent>
    );
    expect(queryByText('Content')).not.toBe(null);
  });

  it('renders in vertical orientation and active', () => {
    const { queryByText } = render(
      // @ts-expect-error Property 'orientation' does not exist on type ...
      <StepContent orientation="vertical" active>
        Content
      </StepContent>
    );
    expect(queryByText('Content')).not.toBe(null);
  });

  it('does not render children when not active or expanded', () => {
    const { queryByText } = render(
      // @ts-expect-error Property 'orientation' does not exist on type ...
      <StepContent orientation="vertical">Content</StepContent>
    );
    expect(queryByText('Content')).toBe(null);
  });
});
