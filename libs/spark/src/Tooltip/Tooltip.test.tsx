import { render } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Tooltip title="Title">
        <button>label</button>
      </Tooltip>
    );

    expect(baseElement).toBeTruthy();
  });
});
