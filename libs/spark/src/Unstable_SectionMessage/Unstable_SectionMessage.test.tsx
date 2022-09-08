import { render } from '@testing-library/react';
import Unstable_SectionMessage from './Unstable_SectionMessage';

describe('Unstable_SectionMessage', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_SectionMessage title="Title">Message.</Unstable_SectionMessage>
    );

    expect(baseElement).toBeTruthy();
  });
});