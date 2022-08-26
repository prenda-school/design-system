import { render } from '@testing-library/react';
import Unstable_FormLabel from './Unstable_FormLabel';

describe('Unstable_FormLabel', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_FormLabel>Label</Unstable_FormLabel>
    );

    expect(baseElement).toBeTruthy();
  });
});
