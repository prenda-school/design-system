import { render } from '@testing-library/react';
import SectionMessage from './SectionMessage';

describe('SectionMessage', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <SectionMessage title="Title">Message.</SectionMessage>
    );

    expect(baseElement).toBeTruthy();
  });
});
