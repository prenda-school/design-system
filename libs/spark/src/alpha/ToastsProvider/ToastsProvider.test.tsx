import { render } from '@testing-library/react';
import ToastsProvider from './ToastsProvider';

describe('ToastsProvider', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <ToastsProvider>
        <div />
      </ToastsProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
