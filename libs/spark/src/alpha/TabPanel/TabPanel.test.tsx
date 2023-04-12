import { render } from '@testing-library/react';
import TabPanel from './TabPanel';
import Tabs from '../Tabs';

describe('TabPanel', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Tabs value="0">
        <TabPanel value="0" />
      </Tabs>
    );

    expect(baseElement).toBeTruthy();
  });
});
