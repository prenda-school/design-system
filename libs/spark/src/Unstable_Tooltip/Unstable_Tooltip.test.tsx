import { render } from '@testing-library/react';
import Unstable_Tooltip from './Unstable_Tooltip';

describe('Unstable_Tooltip', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Tooltip title="Title">
        <button>label</button>
      </Unstable_Tooltip>
    );

    expect(baseElement).toBeTruthy();
  });
});