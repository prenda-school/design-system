import { render } from '@testing-library/react';
import TabPanel from './TabPanel';
import TabContext from '../TabContext';

describe('TabPanel', () => {
  it('renders', async () => {
    const { findByRole } = render(
      <TabContext value="x">
        <TabPanel value="x" />
      </TabContext>
    );

    const element = await findByRole('tabpanel');

    expect(element).toBeTruthy();
  });
});
