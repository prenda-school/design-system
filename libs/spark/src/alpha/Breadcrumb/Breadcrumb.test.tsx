import { render } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Breadcrumb>Text</Breadcrumb>);

    expect(baseElement).toBeTruthy();
  });
});
