import { render } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Breadcrumbs />);

    expect(baseElement).toBeTruthy();
  });
});
