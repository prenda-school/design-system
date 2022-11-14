import { render } from '@testing-library/react';
import Unstable_TabPanel from './Unstable_TabPanel';
import Unstable_Tabs from '../Unstable_Tabs';

describe('Unstable_TabPanel', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Tabs value="0">
        <Unstable_TabPanel value="0" />
      </Unstable_Tabs>
    );

    expect(baseElement).toBeTruthy();
  });
});
