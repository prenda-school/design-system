import { render } from 'compat-testing-library-react-17';
import Step from './Step';

/**
 * A component that can be used as a child of `Step`. It passes through all unrelated props to the underlying `div`. The props passed from `Step` are intercepted
 */
function Child({
  active,
  alternativeLabel,
  completed,
  disabled,
  expanded,
  icon,
  last,
  orientation,
  ...other
}) {
  return <div {...other}>{icon}</div>;
}

describe('Step', () => {
  it('passes `icon` to its child, with value according to given `index`', () => {
    const { getByText } = render(
      <Step index={0}>
        {/* @ts-expect-error Type '{}' is missing the following properties */}
        <Child />
      </Step>
    );
    expect(getByText('1')).not.toBe(null);
  });
});
