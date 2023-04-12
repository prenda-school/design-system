import { render } from '@testing-library/react';
import Tab from './Tab';
import Tabs from '../Tabs';

describe('Tab', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Tabs defaultValue="0">
        <Tab value="0" />
      </Tabs>
    );

    expect(baseElement).toBeTruthy();
  });
});
