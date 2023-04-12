import { render } from '@testing-library/react';
import Tabs from '../Tabs';
import TabsList from './TabsList';

describe('TabsList', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Tabs value="0">
        <TabsList />
      </Tabs>
    );

    expect(baseElement).toBeTruthy();
  });
});
