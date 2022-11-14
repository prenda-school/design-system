import { render } from '@testing-library/react';
import Unstable_Tab from './Unstable_Tab';
import Unstable_Tabs from '../Unstable_Tabs';

describe('Unstable_Tab', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Tabs defaultValue="0">
        <Unstable_Tab value="0" />
      </Unstable_Tabs>
    );

    expect(baseElement).toBeTruthy();
  });
});
