import { render } from '@testing-library/react';
import FormGroup from './FormGroup';

describe('FormGroup', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<FormGroup />);

    expect(baseElement).toBeTruthy();
  });
});
